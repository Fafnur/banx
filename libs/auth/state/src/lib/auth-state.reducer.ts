import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth-state.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  logged: boolean | null;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const authInitialState: AuthState = {
  logged: false,
};

const authReducer = createReducer(
  authInitialState,
  on(AuthActions.init, AuthActions.logout, (state) => ({
    ...state,
    logged: false,
  })),
  on(AuthActions.restore, (state, { payload }) => ({
    ...state,
    ...payload,
  })),
  on(AuthActions.loginSuccess, (state) => ({
    ...state,
    logged: true,
  }))
);

export function reducer(state: AuthState | undefined, action: Action): AuthState {
  return authReducer(state, action);
}
