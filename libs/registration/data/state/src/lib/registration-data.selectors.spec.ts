import { createStoreMock } from '@banx/core/store/utils';

import {
  REGISTRATION_DATA_FEATURE_KEY,
  registrationDataInitialState,
  RegistrationDataPartialState,
  RegistrationDataState,
} from './registration-data.reducer';
import * as RegistrationDataSelectors from './registration-data.selectors';

describe('RegistrationData Selectors', () => {
  const getStore = createStoreMock<RegistrationDataState, RegistrationDataPartialState>(
    REGISTRATION_DATA_FEATURE_KEY,
    registrationDataInitialState
  );
  let store: RegistrationDataPartialState;

  it('selectDataFinishing() should return dataFinishing', () => {
    store = getStore({ dataFinishing: true });
    const results = RegistrationDataSelectors.selectDataFinishing(store);

    expect(results).toBeTruthy();
  });
});
