import { createStoreMock } from '@banx/core/store/utils';

import {
  REGISTRATION_FINISH_FEATURE_KEY,
  registrationFinishInitialState,
  RegistrationFinishPartialState,
  RegistrationFinishState,
} from './registration-finish.reducer';
import * as RegistratioFinishSelectors from './registration-finish.selectors';

describe('RegistrationFinish Selectors', () => {
  const getStore = createStoreMock<RegistrationFinishState, RegistrationFinishPartialState>(
    REGISTRATION_FINISH_FEATURE_KEY,
    registrationFinishInitialState
  );
  let store: RegistrationFinishPartialState;

  it('selectUserCreating() should return userCreating', () => {
    store = getStore({ registrationFinishing: true });
    const results = RegistratioFinishSelectors.selectRegistrationFinishing(store);

    expect(results).toBeTruthy();
  });
});
