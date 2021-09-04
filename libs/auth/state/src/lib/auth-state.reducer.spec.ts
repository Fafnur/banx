import { Action } from '@ngrx/store';

import { createStateMock } from '@banx/core/store/utils';
import { USER_AUTH_STUB } from '@banx/users/common';

import * as AuthActions from './auth-state.actions';
import { authInitialState, AuthState, reducer } from './auth-state.reducer';

describe('Auth Reducer', () => {
  const getState = createStateMock(authInitialState);
  let state: AuthState;

  describe('valid Auth actions', () => {
    it('loginSuccess() should return userAuth', () => {
      state = getState({ logged: true });
      const action = AuthActions.init();
      const result = reducer(state, action);

      expect(result.logged).toBeFalsy();
    });

    it('loginSuccess() should return userAuth', () => {
      state = getState();
      const action = AuthActions.loginSuccess({ payload: USER_AUTH_STUB });
      const result = reducer(state, action);

      expect(result.logged).toBeTruthy();
    });

    it('restore() should set logged', () => {
      state = getState();
      const action = AuthActions.restore({ payload: { logged: true } });
      const result = reducer(state, action);

      expect(result.logged).toBeTruthy();
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(authInitialState, action);

      expect(result).toBe(authInitialState);
    });
  });
});
