import { Action } from '@ngrx/store';

import { API_ERROR_STUB } from '@banx/core/api/service';
import { createStateMock } from '@banx/core/store/utils';
import { FINGERPRINT_FONTS_DETECTED_STUB } from '@banx/fingerprints/common';

import * as FingerprintActions from './fingerprint.actions';
import { fingerprintInitialState, FingerprintState, reducer } from './fingerprint.reducer';

describe('Fingerprint Reducer', () => {
  const getState = createStateMock(fingerprintInitialState);

  let state: FingerprintState;

  it('detectFonts() should set fontsDetecting true', () => {
    state = getState();

    const action = FingerprintActions.detectFonts();

    const result = reducer(state, action);

    expect(result.fontsDetecting).toBeTruthy();
  });

  it('detectFontsSuccess() should set fontsDetecting false', () => {
    state = getState({ fontsDetecting: true });

    const action = FingerprintActions.detectFontsSuccess({ payload: FINGERPRINT_FONTS_DETECTED_STUB });

    const result = reducer(state, action);

    expect(result.fontsDetecting).toBeFalsy();
  });

  it('detectFontsFailure() should set fontsDetecting false', () => {
    state = getState({ fontsDetecting: true });

    const action = FingerprintActions.detectFontsFailure({ payload: API_ERROR_STUB });

    const result = reducer(state, action);

    expect(result.fontsDetecting).toBeFalsy();
  });

  it('saveFonts() should set fontsSaving true', () => {
    state = getState();

    const action = FingerprintActions.saveFonts({ payload: FINGERPRINT_FONTS_DETECTED_STUB });

    const result = reducer(state, action);

    expect(result.fontsSaving).toBeTruthy();
  });

  it('saveFontsSuccess() should set fontsSaving false', () => {
    state = getState({ fontsSaving: true });

    const action = FingerprintActions.saveFontsSuccess();

    const result = reducer(state, action);

    expect(result.fontsSaving).toBeFalsy();
  });

  it('saveFontsFailure() should set fontsSaving false', () => {
    state = getState({ fontsSaving: true });

    const action = FingerprintActions.saveFontsFailure({ payload: API_ERROR_STUB });

    const result = reducer(state, action);

    expect(result.fontsSaving).toBeFalsy();
  });

  it('should return the previous state', () => {
    const action = {} as Action;

    const result = reducer(fingerprintInitialState, action);

    expect(result).toBe(fingerprintInitialState);
  });
});
