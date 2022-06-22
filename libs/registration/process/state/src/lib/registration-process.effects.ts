import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { combineLatest } from 'rxjs';
import { map, take, withLatestFrom } from 'rxjs/operators';

import { LoggerService } from '@banx/core/logger/service';
import { NavigationService } from '@banx/core/navigation/service';
import { PlatformService } from '@banx/core/platform/service';
import { LocalAsyncStorage } from '@banx/core/storage/local';
import { RegistrationProcessApiService } from '@banx/registration/process/api';
import {
  getRegistrationPath,
  RegistrationProcessKeys,
  RegistrationStep,
  selectStep,
  selectStepContinue,
} from '@banx/registration/process/common';

import * as RegistrationProcessActions from './registration-process.actions';
import { RegistrationProcessPartialState } from './registration-process.reducer';
import * as RegistrationProcessSelectors from './registration-process.selectors';

@Injectable()
export class RegistrationProcessEffects implements OnInitEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationProcessActions.init),
      withLatestFrom(
        this.localAsyncStorage
          .getItems([RegistrationProcessKeys.ProcessId, RegistrationProcessKeys.SelectedStepId, RegistrationProcessKeys.SelectedSubStep])
          .pipe(take(1))
      ),
      fetch({
        id: (action, data) => 'registration-process-init',
        run: (action, [processId, selected, subStep]) =>
          RegistrationProcessActions.restore({
            payload: {
              processId,
              selected,
              subStep,
            },
          }),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  navigateToNextStep$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationProcessActions.navigateToNextStep),
      fetch({
        id: () => 'registration-navigate-to-next-step',
        run: () => RegistrationProcessActions.loadProcess(),
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, RegistrationProcessActions.loadProcessFailure({ payload: error })),
      })
    )
  );

  loadProcess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationProcessActions.loadProcess),
      withLatestFrom(this.store.pipe(select(RegistrationProcessSelectors.selectProcessId))),
      fetch({
        id: (action, data) => 'registration-process-load',
        run: (action, processId: string | null) =>
          this.platformService.isBrowser
            ? this.registrationProcessApiService
                .load(processId)
                .pipe(map((payload) => RegistrationProcessActions.loadProcessSuccess({ payload })))
            : undefined,
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, RegistrationProcessActions.loadProcessFailure({ payload: error })),
      })
    )
  );

  loadProcessSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationProcessActions.loadProcessSuccess),
      fetch({
        id: () => 'registration-process-load-success',
        run: (action) => {
          this.localAsyncStorage.setItem(RegistrationProcessKeys.ProcessId, action.payload.processId);

          return RegistrationProcessActions.selectStep();
        },
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  selectStep$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationProcessActions.selectStep),
      withLatestFrom(
        combineLatest([
          this.store.select(RegistrationProcessSelectors.selectSteps),
          this.store.select(RegistrationProcessSelectors.selectSubStep),
        ])
      ),
      fetch({
        id: (action, data) => 'registration-process-select-step',
        run: (action, [steps, subStep]: [RegistrationStep[], string | null]) =>
          RegistrationProcessActions.selectStepSuccess({
            payload: selectStep(steps, subStep),
          }),
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, RegistrationProcessActions.selectStepFailure({ payload: error })),
      })
    )
  );

  selectStepSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationProcessActions.selectStepSuccess, RegistrationProcessActions.selectSubStepSuccess),
      fetch({
        id: () => 'registration-process-select-step-success',
        run: (action) => {
          this.localAsyncStorage.setItems({
            [RegistrationProcessKeys.SelectedStepId]: action.payload.step.id,
            [RegistrationProcessKeys.SelectedSubStep]: action.payload.subStep,
          });

          const path = getRegistrationPath(action.payload, this.navigationService.getPaths());
          if (this.navigationService.url !== `/${path}`) {
            void this.navigationService.navigateByUrl(path);
          }
        },
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  selectSubStep$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationProcessActions.selectSubStep),
      withLatestFrom(
        combineLatest([
          this.store.select(RegistrationProcessSelectors.selectSteps),
          this.store.select(RegistrationProcessSelectors.selectSubStep),
        ])
      ),
      fetch({
        id: (action, data) => 'registration-process-select-sub-step',
        run: (action, [steps, subStep]: [RegistrationStep[], string | null]) =>
          RegistrationProcessActions.selectSubStepSuccess({
            payload: selectStepContinue(steps, subStep, action.payload),
          }),
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, RegistrationProcessActions.selectSubStepFailure({ payload: error })),
      })
    )
  );

  restartProcess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationProcessActions.restartProcess),
      fetch({
        id: () => 'registration-process-restart',
        run: () => {
          // Remove all data
          this.localAsyncStorage.clear();

          return RegistrationProcessActions.navigateToNextStep();
        },
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  setSubStep$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationProcessActions.setSubStep),
      withLatestFrom(this.store.select(RegistrationProcessSelectors.selectSteps)),
      fetch({
        id: (action, data) => 'registration-process-restart',
        run: (action, steps: RegistrationStep[]) => {
          return RegistrationProcessActions.selectSubStepSuccess({
            payload: selectStep(steps, action.payload),
          });
        },
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<RegistrationProcessPartialState>,
    private readonly registrationProcessApiService: RegistrationProcessApiService,
    private readonly localAsyncStorage: LocalAsyncStorage,
    private readonly platformService: PlatformService,
    private readonly navigationService: NavigationService,
    private readonly loggerService: LoggerService
  ) {}

  ngrxOnInitEffects(): Action {
    return RegistrationProcessActions.init();
  }
}
