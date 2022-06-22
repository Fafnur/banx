import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { map, take, withLatestFrom } from 'rxjs/operators';

import { LoggerService } from '@banx/core/logger/service';
import { PlatformService } from '@banx/core/platform/service';
import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { RegistrationDecisionApiService } from '@banx/registration/decision/api';
import { navigateToNextStep, selectProcessId } from '@banx/registration/process/state';

import * as RegistrationDecisionActions from './registration-decision.actions';
import { RegistrationDecisionPartialState } from './registration-decision.reducer';

@Injectable()
export class RegistrationDecisionEffects {
  makeDecision$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationDecisionActions.makeDecision),
      withLatestFrom(this.store.pipe(select(selectProcessId), isNotNullOrUndefined(), take(1))),
      fetch({
        id: (action, data) => 'registration-make-decision',
        run: (action, processId: string) =>
          this.platformService.isBrowser
            ? this.registrationDecisionApiService.makeDecision(processId).pipe(map(() => RegistrationDecisionActions.makeDecisionSuccess()))
            : undefined,
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, RegistrationDecisionActions.makeDecisionFailure({ payload: error })),
      })
    )
  );

  makeDecisionSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationDecisionActions.makeDecisionSuccess),
      fetch({
        id: () => 'registration-make-decision-success',
        run: () => navigateToNextStep(),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<RegistrationDecisionPartialState>,
    private readonly registrationDecisionApiService: RegistrationDecisionApiService,
    private readonly platformService: PlatformService,
    private readonly loggerService: LoggerService
  ) {}
}
