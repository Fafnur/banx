import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { combineLatest } from 'rxjs';
import { map, take, withLatestFrom } from 'rxjs/operators';

import { LoggerService } from '@banx/core/logger/service';
import { PlatformService } from '@banx/core/platform/service';
import { LocalAsyncStorage } from '@banx/core/storage/local';
import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { VisitorService } from '@banx/core/visitor/service';
import { RegistrationFormApiService } from '@banx/registration/form/api';
import { RegistrationForm, RegistrationFormKeys } from '@banx/registration/form/common';
import { selectProcessId } from '@banx/registration/process/state';

import * as RegistrationFormActions from './registration-form.actions';
import { RegistrationFormPartialState } from './registration-form.reducer';
import { selectForm, selectFormFull } from './registration-form.selectors';

@Injectable()
export class RegistrationFormEffects implements OnInitEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationFormActions.init),
      withLatestFrom(this.localAsyncStorage.getItem<any>(RegistrationFormKeys.Form).pipe(take(1))),
      fetch({
        id: () => 'registration-form-init',
        run: (action, form: RegistrationForm | null) => RegistrationFormActions.restore({ payload: { form } }),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  loadForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationFormActions.loadForm),
      withLatestFrom(this.store.pipe(select(selectProcessId), isNotNullOrUndefined(), take(1))),
      fetch({
        id: () => 'registration-form-load',
        run: (action, processId: string) =>
          this.platformService.isBrowser
            ? this.registrationFormApiService.load(processId).pipe(map((payload) => RegistrationFormActions.loadFormSuccess({ payload })))
            : undefined,
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, RegistrationFormActions.loadFormFailure({ payload: error })),
      })
    )
  );

  createForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationFormActions.createForm),
      withLatestFrom(
        combineLatest([
          this.store.pipe(select(selectProcessId), isNotNullOrUndefined(), take(1)),
          this.store.pipe(select(selectFormFull), isNotNullOrUndefined(), take(1)),
        ])
      ),
      fetch({
        id: () => 'registration-create-form',
        run: (action, [processId, form]: [string, RegistrationForm]) =>
          this.platformService.isBrowser
            ? this.registrationFormApiService
                .create(processId, {
                  form,
                  additional: {
                    visitor: this.visitorService.getUuid(),
                  },
                })
                .pipe(map(() => RegistrationFormActions.createFormSuccess()))
            : undefined,
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, RegistrationFormActions.createFormFailure({ payload: error })),
      })
    )
  );

  validateForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationFormActions.validateForm),
      withLatestFrom(this.store.pipe(select(selectProcessId), isNotNullOrUndefined(), take(1))),
      fetch({
        id: () => 'registration-validate-form',
        run: (action, processId: string) =>
          this.platformService.isBrowser
            ? this.registrationFormApiService
                .validate(processId, { form: action.payload })
                .pipe(map(() => RegistrationFormActions.validateFormSuccess()))
            : undefined,
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, RegistrationFormActions.validateFormFailure({ payload: error })),
      })
    )
  );

  validateFormField$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationFormActions.validateFormField),
      withLatestFrom(this.store.pipe(select(selectProcessId), isNotNullOrUndefined(), take(1))),
      fetch({
        id: (action) => `registration-validate-form-field-${JSON.stringify(action.payload)}`,
        run: (action, processId: string) =>
          this.platformService.isBrowser
            ? this.registrationFormApiService
                .validateUnique(processId, action.payload)
                .pipe(map(() => RegistrationFormActions.validateFormFieldSuccess({ payload: action.payload.field })))
            : undefined,
        onError: (action, error) =>
          this.loggerService.logEffect(
            { context: { action, error } },
            RegistrationFormActions.validateFormFieldFailure({
              payload: { ...error, field: action.payload.field },
            })
          ),
      })
    )
  );

  updateForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationFormActions.updateForm),
      withLatestFrom(this.store.pipe(select(selectForm), isNotNullOrUndefined(), take(1))),
      fetch({
        id: () => 'registration-update-form',
        run: (action, form: RegistrationForm) => this.localAsyncStorage.setItem(RegistrationFormKeys.Form, form),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<RegistrationFormPartialState>,
    private readonly registrationFormApiService: RegistrationFormApiService,
    private readonly localAsyncStorage: LocalAsyncStorage,
    private readonly platformService: PlatformService,
    private readonly loggerService: LoggerService,
    private readonly visitorService: VisitorService
  ) {}

  ngrxOnInitEffects(): Action {
    return RegistrationFormActions.init();
  }
}
