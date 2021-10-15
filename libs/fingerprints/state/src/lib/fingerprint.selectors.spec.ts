import { createStoreMock } from '@banx/core/store/utils';

import { FINGERPRINT_FEATURE_KEY, fingerprintInitialState, FingerprintPartialState, FingerprintState } from './fingerprint.reducer';
import * as FingerprintSelectors from './fingerprint.selectors';

describe('Fingerprint Selectors', () => {
  const getStore = createStoreMock<FingerprintState, FingerprintPartialState>(FINGERPRINT_FEATURE_KEY, fingerprintInitialState);
  let store: FingerprintPartialState;

  it('selectFontsDetecting() should return fontsDetecting true', () => {
    store = getStore({ fontsDetecting: true });

    const results = FingerprintSelectors.selectFontsDetecting(store);

    expect(results).toBeTruthy();
  });

  it('selectFontsSaving() should return fontsSaving true', () => {
    store = getStore({ fontsSaving: true });

    const results = FingerprintSelectors.selectFontsSaving(store);

    expect(results).toBeTruthy();
  });

  it('selectCanvasDetecting() should return canvasDetecting true', () => {
    store = getStore({ canvasDetecting: true });

    const results = FingerprintSelectors.selectCanvasDetecting(store);

    expect(results).toBeTruthy();
  });

  it('selectCanvasSaving() should return canvasSaving true', () => {
    store = getStore({ canvasSaving: true });

    const results = FingerprintSelectors.selectCanvasSaving(store);

    expect(results).toBeTruthy();
  });
});
