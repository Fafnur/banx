import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { map, take, withLatestFrom } from 'rxjs/operators';

import { loginSuccess } from '@banx/auth/state';
import { LoggerService } from '@banx/core/logger/service';
import { PlatformService } from '@banx/core/platform/service';
import { LocalAsyncStorage } from '@banx/core/storage/local';
import { SessionSyncStorage } from '@banx/core/storage/session';
import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { RegistrationFinishApiService } from '@banx/registration/finish/api';
import { RegistrationFormKeys } from '@banx/registration/form/common';
import { RegistrationProcessKeys } from '@banx/registration/process/common';
import { selectProcessId } from '@banx/registration/process/state';

import * as RegistrationFinishActions from './registration-finish.actions';
import { RegistrationFinishPartialState } from './registration-finish.reducer';

@Injectable()
export class RegistrationFinishEffects {
  finishRegistration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationFinishActions.finishRegistration),
      withLatestFrom(this.store.pipe(select(selectProcessId), isNotNullOrUndefined(), take(1))),
      fetch({
        id: (action, data) => 'registration-finish',
        run: (action, processId: string) =>
          this.platformService.isBrowser
            ? this.registrationFinishApiService.finish(processId).pipe(
                map((payload) => {
                  return RegistrationFinishActions.finishRegistrationSuccess({ payload });
                })
              )
            : undefined,
        onError: (action, error) =>
          this.loggerService.logEffect(
            { context: { action, error } },
            RegistrationFinishActions.finishRegistrationFailure({ payload: error })
          ),
      })
    )
  );

  finishRegistrationSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationFinishActions.finishRegistrationSuccess),
      fetch({
        id: () => 'registration-finish-success',
        run: ({ payload }) => {
          this.localAsyncStorage.removeItem(RegistrationProcessKeys.ProcessId);
          this.localAsyncStorage.removeItem(RegistrationProcessKeys.SelectedStepId);
          this.localAsyncStorage.removeItem(RegistrationProcessKeys.SelectedSubStep);
          this.localAsyncStorage.removeItem(RegistrationFormKeys.Form);

          return loginSuccess({ payload });
        },
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<RegistrationFinishPartialState>,
    private readonly registrationFinishApiService: RegistrationFinishApiService,
    private readonly platformService: PlatformService,
    private readonly loggerService: LoggerService,
    private readonly sessionSyncStorage: SessionSyncStorage,
    private readonly localAsyncStorage: LocalAsyncStorage
  ) {}
}
