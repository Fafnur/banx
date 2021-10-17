import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FINGERPRINT_FEATURE_KEY, FingerprintState } from './fingerprint.reducer';

export const selectFingerprintState = createFeatureSelector<FingerprintState>(FINGERPRINT_FEATURE_KEY);

export const selectCanvasDetecting = createSelector(selectFingerprintState, (state) => state.canvasDetecting);

export const selectCanvasSaving = createSelector(selectFingerprintState, (state) => state.canvasSaving);

export const selectFontsDetecting = createSelector(selectFingerprintState, (state) => state.fontsDetecting);

export const selectFontsSaving = createSelector(selectFingerprintState, (state) => state.fontsSaving);

export const selectGeolocationDetecting = createSelector(selectFingerprintState, (state) => state.geolocationDetecting);

export const selectGeolocationSaving = createSelector(selectFingerprintState, (state) => state.geolocationSaving);
