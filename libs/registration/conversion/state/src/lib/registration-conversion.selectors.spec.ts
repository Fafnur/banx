import { createStoreMock } from '@banx/core/store/utils';

import {
  REGISTRATION_CONVERSION_FEATURE_KEY,
  registrationConversionInitialState,
  RegistrationConversionPartialState,
  RegistrationConversionState,
} from './registration-conversion.reducer';
import * as RegistrationConversionSelectors from './registration-conversion.selectors';

describe('RegistrationConversion Selectors', () => {
  const getStore = createStoreMock<RegistrationConversionState, RegistrationConversionPartialState>(
    REGISTRATION_CONVERSION_FEATURE_KEY,
    registrationConversionInitialState
  );
  let store: RegistrationConversionPartialState;

  it('selectConversionLoading() should return conversionLoading', () => {
    store = getStore({ conversionLoading: true });
    const results = RegistrationConversionSelectors.selectConversionLoading(store);

    expect(results).toBeTruthy();
  });

  it('selectConversionComplete() should return conversionComplete', () => {
    store = getStore({ conversionComplete: true });
    const results = RegistrationConversionSelectors.selectConversionComplete(store);

    expect(results).toBeTruthy();
  });
});
