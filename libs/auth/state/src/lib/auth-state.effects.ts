import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { map, withLatestFrom } from 'rxjs/operators';

import { AuthApiService } from '@banx/auth/api';
import { LoggerService } from '@banx/core/logger/service';
import { SessionAsyncStorage } from '@banx/core/storage/session';
import { UserStorageKeys } from '@banx/users/common';

import * as AuthActions from './auth-state.actions';

@Injectable()
export class AuthStateEffects implements OnInitEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.init),
      withLatestFrom(this.sessionAsyncStorage.getItem(UserStorageKeys.AuthToken)),
      fetch({
        run: (action, authToken) => AuthActions.restore({ payload: { logged: !!authToken } }),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      fetch({
        run: (action) =>
          this.authApiService.login(action.payload).pipe(
            map((payload) => {
              this.sessionAsyncStorage.setItems({
                [UserStorageKeys.Id]: payload.id,
                [UserStorageKeys.AuthToken]: payload.accessToken,
                [UserStorageKeys.Username]: payload.username,
              });

              return AuthActions.loginSuccess({ payload });
            })
          ),
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, AuthActions.loginFailure({ payload: error })),
      })
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      fetch({
        run: ({ payload }) => {
          // TODO: Need to refactor
          this.sessionAsyncStorage.setItems({
            [UserStorageKeys.Id]: payload.id,
            [UserStorageKeys.AuthToken]: payload.accessToken,
            [UserStorageKeys.Username]: payload.username,
          });
        },
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      fetch({
        run: () => this.sessionAsyncStorage.removeItems([UserStorageKeys.AuthToken, UserStorageKeys.Id, UserStorageKeys.Username]),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  recovery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.recovery),
      fetch({
        run: (action) => this.authApiService.recovery(action.payload).pipe(map(() => AuthActions.recoverySuccess())),
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, AuthActions.recoveryFailure({ payload: error })),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly sessionAsyncStorage: SessionAsyncStorage,
    private readonly loggerService: LoggerService,
    private readonly authApiService: AuthApiService
  ) {}

  ngrxOnInitEffects(): Action {
    return AuthActions.init();
  }
}
