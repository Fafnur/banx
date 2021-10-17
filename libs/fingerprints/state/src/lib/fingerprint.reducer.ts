import { Action, createReducer, on } from '@ngrx/store';

import * as FingerprintActions from './fingerprint.actions';

export const FINGERPRINT_FEATURE_KEY = 'fingerprint';

export interface FingerprintState {
  canvasDetecting: boolean;
  canvasSaving: boolean;
  fontsDetecting: boolean;
  fontsSaving: boolean;
  geolocationDetecting: boolean;
  geolocationSaving: boolean;
}

export interface FingerprintPartialState {
  readonly [FINGERPRINT_FEATURE_KEY]: FingerprintState;
}

export const fingerprintInitialState: FingerprintState = {
  canvasDetecting: false,
  canvasSaving: false,
  fontsDetecting: false,
  fontsSaving: false,
  geolocationDetecting: false,
  geolocationSaving: false,
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
  })),
  on(FingerprintActions.detectCanvas, (state) => ({
    ...state,
    canvasDetecting: true,
  })),
  on(FingerprintActions.detectCanvasSuccess, (state) => ({
    ...state,
    canvasDetecting: false,
  })),
  on(FingerprintActions.detectCanvasFailure, (state) => ({
    ...state,
    canvasDetecting: false,
  })),
  on(FingerprintActions.saveCanvas, (state) => ({
    ...state,
    canvasSaving: true,
  })),
  on(FingerprintActions.saveCanvasSuccess, (state) => ({
    ...state,
    canvasSaving: false,
  })),
  on(FingerprintActions.saveCanvasFailure, (state) => ({
    ...state,
    canvasSaving: false,
  })),
  on(FingerprintActions.detectGeolocation, (state) => ({
    ...state,
    geolocationDetecting: true,
  })),
  on(FingerprintActions.detectGeolocationSuccess, (state) => ({
    ...state,
    geolocationDetecting: false,
  })),
  on(FingerprintActions.detectGeolocationFailure, (state) => ({
    ...state,
    geolocationDetecting: false,
  })),
  on(FingerprintActions.saveGeolocation, (state) => ({
    ...state,
    geolocationSaving: true,
  })),
  on(FingerprintActions.saveGeolocationSuccess, (state) => ({
    ...state,
    geolocationSaving: false,
  })),
  on(FingerprintActions.saveGeolocationFailure, (state) => ({
    ...state,
    geolocationSaving: false,
  }))
);

export function reducer(state: FingerprintState | undefined, action: Action): FingerprintState {
  return fingerprintReducer(state, action);
}
