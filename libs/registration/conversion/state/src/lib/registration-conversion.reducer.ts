import { Action, createReducer, on } from '@ngrx/store';

import * as RegistrationConversionActions from './registration-conversion.actions';

export const REGISTRATION_CONVERSION_FEATURE_KEY = 'registrationConversion';

export interface RegistrationConversionState {
  conversionLoading: boolean;
  conversionComplete: boolean;
}

export interface RegistrationConversionPartialState {
  readonly [REGISTRATION_CONVERSION_FEATURE_KEY]: RegistrationConversionState;
}

export const registrationConversionInitialState: RegistrationConversionState = {
  conversionLoading: false,
  conversionComplete: false,
};

const registrationConversionReducer = createReducer(
  registrationConversionInitialState,
  on(RegistrationConversionActions.loadConversion, (state) => ({
    ...state,
    conversionLoading: true,
  })),
  on(RegistrationConversionActions.loadConversionSuccess, (state) => ({
    ...state,
    conversionLoading: false,
  })),
  on(RegistrationConversionActions.loadConversionFailure, (state) => ({
    ...state,
    conversionLoading: false,
  })),
  on(RegistrationConversionActions.completeConversion, (state) => ({
    ...state,
    conversionComplete: true,
  })),
  on(RegistrationConversionActions.completeConversionSuccess, (state) => ({
    ...state,
    conversionComplete: false,
  })),
  on(RegistrationConversionActions.completeConversionFailure, (state) => ({
    ...state,
    conversionComplete: false,
  }))
);

export function reducer(state: RegistrationConversionState | undefined, action: Action): RegistrationConversionState {
  return registrationConversionReducer(state, action);
}
