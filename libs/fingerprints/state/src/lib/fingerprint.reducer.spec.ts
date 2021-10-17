import { Action } from '@ngrx/store';

import { API_ERROR_STUB } from '@banx/core/api/service';
import { createStateMock } from '@banx/core/store/utils';
import { CANVAS_FINGERPRINT_STUB, FONTS_FINGERPRINT_STUB } from '@banx/fingerprints/common';

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

    const action = FingerprintActions.detectFontsSuccess({ payload: FONTS_FINGERPRINT_STUB });

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

    const action = FingerprintActions.saveFonts({ payload: FONTS_FINGERPRINT_STUB });

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

  it('detectCanvas() should set canvasDetecting true', () => {
    state = getState();

    const action = FingerprintActions.detectCanvas();

    const result = reducer(state, action);

    expect(result.canvasDetecting).toBeTruthy();
  });

  it('detectCanvasSuccess() should set canvasDetecting false', () => {
    state = getState({ canvasDetecting: true });

    const action = FingerprintActions.detectCanvasSuccess({ payload: CANVAS_FINGERPRINT_STUB });

    const result = reducer(state, action);

    expect(result.canvasDetecting).toBeFalsy();
  });

  it('detectCanvasFailure() should set canvasDetecting false', () => {
    state = getState({ canvasDetecting: true });

    const action = FingerprintActions.detectCanvasFailure({ payload: API_ERROR_STUB });

    const result = reducer(state, action);

    expect(result.canvasDetecting).toBeFalsy();
  });

  it('saveCanvas() should set canvasSaving true', () => {
    state = getState();

    const action = FingerprintActions.saveCanvas({ payload: CANVAS_FINGERPRINT_STUB });

    const result = reducer(state, action);

    expect(result.canvasSaving).toBeTruthy();
  });

  it('saveCanvasSuccess() should set canvasSaving false', () => {
    state = getState({ canvasSaving: true });

    const action = FingerprintActions.saveCanvasSuccess();

    const result = reducer(state, action);

    expect(result.canvasSaving).toBeFalsy();
  });

  it('saveCanvasFailure() should set canvasSaving false', () => {
    state = getState({ canvasSaving: true });

    const action = FingerprintActions.saveCanvasFailure({ payload: API_ERROR_STUB });

    const result = reducer(state, action);

    expect(result.canvasSaving).toBeFalsy();
  });

  it('detectGeolocation() should set geolocationDetecting true', () => {
    state = getState();

    const action = FingerprintActions.detectGeolocation();

    const result = reducer(state, action);

    expect(result.geolocationDetecting).toBeTruthy();
  });

  it('detectGeolocationSuccess() should set geolocationDetecting false', () => {
    state = getState({ geolocationDetecting: true });

    const action = FingerprintActions.detectGeolocationSuccess({ payload: null });

    const result = reducer(state, action);

    expect(result.geolocationDetecting).toBeFalsy();
  });

  it('detectGeolocationFailure() should set geolocationDetecting false', () => {
    state = getState({ geolocationDetecting: true });

    const action = FingerprintActions.detectGeolocationFailure({ payload: API_ERROR_STUB });

    const result = reducer(state, action);

    expect(result.geolocationDetecting).toBeFalsy();
  });

  it('saveGeolocation() should set geolocationSaving true', () => {
    state = getState();

    const action = FingerprintActions.saveGeolocation({ payload: null });

    const result = reducer(state, action);

    expect(result.geolocationSaving).toBeTruthy();
  });

  it('saveGeolocationSuccess() should set geolocationSaving false', () => {
    state = getState({ geolocationSaving: true });

    const action = FingerprintActions.saveGeolocationSuccess();

    const result = reducer(state, action);

    expect(result.geolocationSaving).toBeFalsy();
  });

  it('saveGeolocationFailure() should set geolocationSaving false', () => {
    state = getState({ geolocationSaving: true });

    const action = FingerprintActions.saveGeolocationFailure({ payload: API_ERROR_STUB });

    const result = reducer(state, action);

    expect(result.geolocationSaving).toBeFalsy();
  });

  it('should return the previous state', () => {
    const action = {} as Action;

    const result = reducer(fingerprintInitialState, action);

    expect(result).toBe(fingerprintInitialState);
  });
});
