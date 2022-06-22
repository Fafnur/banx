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
import { castRegistrationForm, RegistrationForm, RegistrationFormKeys } from '@banx/registration/form/common';
import { navigateToNextStep, selectProcessId } from '@banx/registration/process/state';

import * as RegistrationFormActions from './registration-form.actions';
import { RegistrationFormPartialState } from './registration-form.reducer';
import * as RegistrationFormSelectors from './registration-form.selectors';

@Injectable()
export class RegistrationFormEffects implements OnInitEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationFormActions.init),
      withLatestFrom(this.localAsyncStorage.getItem<RegistrationForm | null>(RegistrationFormKeys.Form).pipe(take(1))),
      fetch({
        id: (action, data) => 'registration-form-init',
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
        id: (action, data) => 'registration-form-load',
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
          this.store.pipe(select(selectProcessId), isNotNullOrUndefined()),
          this.store.pipe(select(RegistrationFormSelectors.selectForm), isNotNullOrUndefined()),
        ])
      ),
      fetch({
        id: (action, data) => 'registration-create-form',
        run: (action, [processId, form]: [string, RegistrationForm]) =>
          this.platformService.isBrowser
            ? this.registrationFormApiService
                .create(processId, {
                  form: castRegistrationForm(form, true),
                  additional: {
                    visitor: this.visitorService.getUuid(),
                  },
                })
                .pipe(map(() => RegistrationFormActions.createFormSuccess()))
            : undefined,
        onError: (action, error) =>
          this.loggerService.logEffect(
            { context: { action, error }, debug: true },
            RegistrationFormActions.createFormFailure({ payload: error })
          ),
      })
    )
  );

  createFormSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationFormActions.createFormSuccess),
      fetch({
        id: () => 'registration-create-form-success',
        run: () => navigateToNextStep(),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  validateForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationFormActions.validateForm),
      withLatestFrom(this.store.pipe(select(selectProcessId), isNotNullOrUndefined(), take(1))),
      fetch({
        id: (action, data) => 'registration-validate-form',
        run: (action, processId: string) =>
          this.platformService.isBrowser
            ? this.registrationFormApiService
                .validate(processId, action.payload)
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
        id: (action, data) => `registration-validate-form-field-${JSON.stringify(action.payload)}`,
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
              payload: { response: error, field: action.payload.field },
            })
          ),
      })
    )
  );

  updateForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationFormActions.updateForm),
      fetch({
        id: () => 'registration-update-form',
        run: (action) => this.localAsyncStorage.setItem(RegistrationFormKeys.Form, action.payload),
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
