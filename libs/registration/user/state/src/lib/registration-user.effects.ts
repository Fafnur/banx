import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { map, take, withLatestFrom } from 'rxjs/operators';

import { LoggerService } from '@banx/core/logger/service';
import { PlatformService } from '@banx/core/platform/service';
import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { loadProcess, selectProcessId } from '@banx/registration/process/state';
import { RegistrationUserApiService } from '@banx/registration/user/api';

import * as RegistrationUserActions from './registration-user.actions';
import { RegistrationUserPartialState } from './registration-user.reducer';

@Injectable()
export class RegistrationUserEffects {
  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationUserActions.createUser),
      withLatestFrom(this.store.pipe(select(selectProcessId), isNotNullOrUndefined(), take(1))),
      fetch({
        id: () => 'registration-user-create',
        run: (action, processId: string) =>
          this.platformService.isBrowser
            ? this.registrationUserApiService.create(processId).pipe(map(() => RegistrationUserActions.createUserSuccess()))
            : undefined,
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, RegistrationUserActions.createUserFailure({ payload: error })),
      })
    )
  );

  createUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationUserActions.createUserSuccess),
      fetch({
        id: () => 'registration-user-create-success',
        run: () => loadProcess(),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<RegistrationUserPartialState>,
    private readonly registrationUserApiService: RegistrationUserApiService,
    private readonly platformService: PlatformService,
    private readonly loggerService: LoggerService
  ) {}
}
