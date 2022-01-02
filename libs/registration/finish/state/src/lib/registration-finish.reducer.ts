import { Action, createReducer, on } from '@ngrx/store';

import * as RegistrationFinishActions from './registration-finish.actions';

export const REGISTRATION_FINISH_FEATURE_KEY = 'registrationFinish';

export interface RegistrationFinishState {
  registrationFinishing: boolean;
}

export interface RegistrationFinishPartialState {
  readonly [REGISTRATION_FINISH_FEATURE_KEY]: RegistrationFinishState;
}

export const registrationFinishInitialState: RegistrationFinishState = {
  registrationFinishing: false,
};

const registrationFinishReducer = createReducer(
  registrationFinishInitialState,
  on(RegistrationFinishActions.finishRegistration, (state) => ({
    ...state,
    registrationFinishing: true,
  })),
  on(RegistrationFinishActions.finishRegistrationSuccess, (state) => ({
    ...state,
    registrationFinishing: false,
  })),
  on(RegistrationFinishActions.finishRegistrationFailure, (state) => ({
    ...state,
    registrationFinishing: false,
  }))
);

export function reducer(state: RegistrationFinishState | undefined, action: Action): RegistrationFinishState {
  return registrationFinishReducer(state, action);
}
