import { createStoreMock } from '@banx/core/store/utils';

import {
  REGISTRATION_DECISION_FEATURE_KEY,
  registrationDecisionInitialState,
  RegistrationDecisionPartialState,
  RegistrationDecisionState,
} from './registration-decision.reducer';
import * as RegistrationDecisionSelectors from './registration-decision.selectors';

describe('RegistrationDecision Selectors', () => {
  const getStore = createStoreMock<RegistrationDecisionState, RegistrationDecisionPartialState>(
    REGISTRATION_DECISION_FEATURE_KEY,
    registrationDecisionInitialState
  );
  let store: RegistrationDecisionPartialState;

  it('selectDecisionMaking() should return decisionMaking', () => {
    store = getStore({ decisionMaking: true });
    const results = RegistrationDecisionSelectors.selectDecisionMaking(store);

    expect(results).toBeTruthy();
  });
});
