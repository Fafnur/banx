import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { UserAuth, UserCredentials, UserSecrets } from '@banx/users/common';

import * as AuthActions from './auth-state.actions';
import { AuthPartialState } from './auth-state.reducer';
import * as AuthSelectors from './auth-state.selectors';

@Injectable()
export class AuthFacade {
  logged$ = this.store.pipe(select(AuthSelectors.selectLogged)).pipe(isNotNullOrUndefined());

  loginSuccess$: Observable<UserAuth> = this.actions$.pipe(
    ofType(AuthActions.loginSuccess),
    map(({ payload }) => payload)
  );

  loginFailure$: Observable<Record<string, any>> = this.actions$.pipe(
    ofType(AuthActions.loginFailure),
    map(({ payload }) => payload)
  );

  recoverySuccess$: Observable<void> = this.actions$.pipe(
    ofType(AuthActions.recoverySuccess),
    map(() => undefined)
  );

  recoveryFailure$: Observable<Record<string, any>> = this.actions$.pipe(
    ofType(AuthActions.recoveryFailure),
    map(({ payload }) => payload)
  );

  constructor(private readonly actions$: Actions, private readonly store: Store<AuthPartialState>) {}

  login(payload: UserCredentials): void {
    this.dispatch(AuthActions.login({ payload }));
  }

  logout(): void {
    this.dispatch(AuthActions.logout());
  }

  recovery(payload: UserSecrets): void {
    this.dispatch(AuthActions.recovery({ payload }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
