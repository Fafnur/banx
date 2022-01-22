import { createStoreMock } from '@banx/core/store/utils';

import {
  REGISTRATION_USER_FEATURE_KEY,
  registrationUserInitialState,
  RegistrationUserPartialState,
  RegistrationUserState,
} from './registration-user.reducer';
import * as RegistrationUserSelectors from './registration-user.selectors';

describe('RegistrationUser Selectors', () => {
  const getStore = createStoreMock<RegistrationUserState, RegistrationUserPartialState>(
    REGISTRATION_USER_FEATURE_KEY,
    registrationUserInitialState
  );
  let store: RegistrationUserPartialState;

  it('selectUserCreating() should return userCreating', () => {
    store = getStore({ userCreating: true });
    const results = RegistrationUserSelectors.selectUserCreating(store);

    expect(results).toBeTruthy();
  });
});
