import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import { UserCredentials } from '@banx/users/common';

import * as AuthActions from './auth-state.actions';
import * as AuthSelectors from './auth-state.selectors';

@Injectable()
export class AuthStateFacade {
  logged$ = this.store.pipe(select(AuthSelectors.selectLogged));

  constructor(private readonly store: Store) {}

  login(payload: UserCredentials): void {
    this.dispatch(AuthActions.login({ payload }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
