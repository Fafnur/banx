import { Action, createReducer, on } from '@ngrx/store';

import * as FingerprintActions from './fingerprint.actions';

export const FINGERPRINT_FEATURE_KEY = 'fingerprint';

export interface FingerprintState {
  fontsDetecting: boolean;
  fontsSaving: boolean;
}

export interface FingerprintPartialState {
  readonly [FINGERPRINT_FEATURE_KEY]: FingerprintState;
}

export const fingerprintInitialState: FingerprintState = {
  fontsDetecting: false,
  fontsSaving: false,
};

const fingerprintReducer = createReducer(
  fingerprintInitialState,
  on(FingerprintActions.detectFonts, (state) => ({
    ...state,
    fontsDetecting: true,
  })),
  on(FingerprintActions.detectFontsSuccess, (state) => ({
    ...state,
    fontsDetecting: false,
  })),
  on(FingerprintActions.detectFontsFailure, (state) => ({
    ...state,
    fontsDetecting: false,
  })),
  on(FingerprintActions.saveFonts, (state) => ({
    ...state,
    fontsSaving: true,
  })),
  on(FingerprintActions.saveFontsSuccess, (state) => ({
    ...state,
    fontsSaving: false,
  })),
  on(FingerprintActions.saveFontsFailure, (state) => ({
    ...state,
    fontsSaving: false,
  }))
);

export function reducer(state: FingerprintState | undefined, action: Action): FingerprintState {
  return fingerprintReducer(state, action);
}
