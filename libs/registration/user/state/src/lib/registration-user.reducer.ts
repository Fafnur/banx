import { Action, createReducer, on } from '@ngrx/store';

import * as RegistrationUserActions from './registration-user.actions';

export const REGISTRATION_USER_FEATURE_KEY = 'registrationUser';

export interface RegistrationUserState {
  userCreating: boolean;
}

export interface RegistrationUserPartialState {
  readonly [REGISTRATION_USER_FEATURE_KEY]: RegistrationUserState;
}

export const registrationUserInitialState: RegistrationUserState = {
  userCreating: false,
};

const registrationUserReducer = createReducer(
  registrationUserInitialState,
  on(RegistrationUserActions.createUser, (state) => ({
    ...state,
    userCreating: true,
  })),
  on(RegistrationUserActions.createUserSuccess, (state) => ({
    ...state,
    userCreating: false,
  })),
  on(RegistrationUserActions.createUserFailure, (state) => ({
    ...state,
    userCreating: false,
  }))
);

export function reducer(state: RegistrationUserState | undefined, action: Action): RegistrationUserState {
  return registrationUserReducer(state, action);
}
