import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { take, withLatestFrom } from 'rxjs/operators';

import { LoggerService } from '@banx/core/logger/service';
import { SessionAsyncStorage } from '@banx/core/storage/session';
import { AUTH_TOKEN } from '@banx/users/common';

import * as AuthActions from './auth-state.actions';

@Injectable()
export class AuthStateEffects implements OnInitEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.init),
      withLatestFrom(this.sessionAsyncStorage.getItem(AUTH_TOKEN).pipe(take(1))),
      fetch({
        run: (action, authToken) => AuthActions.restore({ payload: { logged: !!authToken } }),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  // restore$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.restore),
  //     fetch({
  //       run: (action) => {
  //         return AuthActions.loginSuccess({ auth: [] });
  //       },
  //       onError: (action, error) => {
  //         return AuthActions.loginFailure({ error });
  //       },
  //     })
  //   )
  // );

  constructor(
    private readonly actions$: Actions,
    private readonly sessionAsyncStorage: SessionAsyncStorage,
    private readonly loggerService: LoggerService
  ) {}

  ngrxOnInitEffects(): Action {
    return AuthActions.init();
  }
}
