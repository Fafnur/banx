import { Action } from '@ngrx/store';

import { HTTP_ERROR_STUB } from '@banx/core/api/service';
import { createStateMock } from '@banx/core/store/utils';

import * as RegistrationUserActions from './registration-user.actions';
import { reducer, registrationUserInitialState, RegistrationUserState } from './registration-user.reducer';

describe('RegistrationUser Reducer', () => {
  const getState = createStateMock(registrationUserInitialState);
  let state: RegistrationUserState;

  beforeEach(() => {
    state = getState();
  });

  it('createUser() should set userCreating true', () => {
    const action = RegistrationUserActions.createUser();
    const result = reducer(state, action);

    expect(result.userCreating).toBeTruthy();
  });

  it('createUserSuccess() should set userCreating false', () => {
    const action = RegistrationUserActions.createUserSuccess();
    const result = reducer(state, action);

    expect(result.userCreating).toBeFalsy();
  });

  it('createUserFailure() should set userCreating false', () => {
    const action = RegistrationUserActions.createUserFailure({ payload: HTTP_ERROR_STUB });
    const result = reducer(state, action);

    expect(result.userCreating).toBeFalsy();
  });

  it('should return the previous state', () => {
    const action = {} as Action;
    const result = reducer(registrationUserInitialState, action);

    expect(result).toBe(registrationUserInitialState);
  });
});
