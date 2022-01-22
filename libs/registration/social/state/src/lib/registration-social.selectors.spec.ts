import { createStoreMock } from '@banx/core/store/utils';

import {
  REGISTRATION_SOCIAL_FEATURE_KEY,
  registrationSocialInitialState,
  RegistrationSocialPartialState,
  RegistrationSocialState,
} from './registration-social.reducer';
import * as RegistrationSocialSelectors from './registration-social.selectors';

describe('RegistrationSocial Selectors', () => {
  const getStore = createStoreMock<RegistrationSocialState, RegistrationSocialPartialState>(
    REGISTRATION_SOCIAL_FEATURE_KEY,
    registrationSocialInitialState
  );
  let store: RegistrationSocialPartialState;

  it('selectSocialFinishing() should return socialFinishing', () => {
    store = getStore({ socialFinishing: true });
    const results = RegistrationSocialSelectors.selectSocialFinishing(store);

    expect(results).toBeTruthy();
  });
});
