import { Action, createReducer, on } from '@ngrx/store';

import * as RegistrationDataActions from './registration-data.actions';

export const REGISTRATION_DATA_FEATURE_KEY = 'registrationData';

export interface RegistrationDataState {
  dataFinishing: boolean;
}

export interface RegistrationDataPartialState {
  readonly [REGISTRATION_DATA_FEATURE_KEY]: RegistrationDataState;
}

export const registrationDataInitialState: RegistrationDataState = {
  dataFinishing: false,
};

const registrationDataReducer = createReducer(
  registrationDataInitialState,
  on(RegistrationDataActions.finishData, (state) => ({
    ...state,
    dataFinishing: true,
  })),
  on(RegistrationDataActions.finishDataSuccess, (state) => ({
    ...state,
    dataFinishing: false,
  })),
  on(RegistrationDataActions.finishDataFailure, (state) => ({
    ...state,
    dataFinishing: false,
  }))
);

export function reducer(state: RegistrationDataState | undefined, action: Action): RegistrationDataState {
  return registrationDataReducer(state, action);
}
