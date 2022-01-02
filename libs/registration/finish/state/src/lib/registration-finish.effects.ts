import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { map, take, withLatestFrom } from 'rxjs/operators';

import { LoggerService } from '@banx/core/logger/service';
import { PlatformService } from '@banx/core/platform/service';
import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { RegistrationFinishApiService } from '@banx/registration/finish/api';
import { loadProcess, selectProcessId } from '@banx/registration/process/state';

import * as RegistrationFinishActions from './registration-finish.actions';
import { RegistrationFinishPartialState } from './registration-finish.reducer';

@Injectable()
export class RegistrationFinishEffects {
  finishRegistration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationFinishActions.finishRegistration),
      withLatestFrom(this.store.pipe(select(selectProcessId), isNotNullOrUndefined(), take(1))),
      fetch({
        id: () => 'registration-finish',
        run: (action, processId: string) =>
          this.platformService.isBrowser
            ? this.registrationFinishApiService.finish(processId).pipe(map(() => RegistrationFinishActions.finishRegistrationSuccess()))
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
        run: () => loadProcess(),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<RegistrationFinishPartialState>,
    private readonly registrationFinishApiService: RegistrationFinishApiService,
    private readonly platformService: PlatformService,
    private readonly loggerService: LoggerService
  ) {}
}
