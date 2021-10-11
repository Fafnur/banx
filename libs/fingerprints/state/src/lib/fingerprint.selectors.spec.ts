import { createStoreMock } from '@banx/core/store/utils';

import { FINGERPRINT_FEATURE_KEY, fingerprintInitialState, FingerprintPartialState, FingerprintState } from './fingerprint.reducer';
import * as FingerprintSelectors from './fingerprint.selectors';

describe('Fingerprint Selectors', () => {
  const getStore = createStoreMock<FingerprintState, FingerprintPartialState>(FINGERPRINT_FEATURE_KEY, fingerprintInitialState);
  let store: FingerprintPartialState;

  describe('Fingerprint Selectors', () => {
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
  });
});
