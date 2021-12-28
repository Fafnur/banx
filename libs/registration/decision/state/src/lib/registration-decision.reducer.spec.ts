import { Action } from '@ngrx/store';

import { HTTP_ERROR_STUB } from '@banx/core/api/service';
import { createStateMock } from '@banx/core/store/utils';

import * as RegistrationDecisionActions from './registration-decision.actions';
import { reducer, registrationDecisionInitialState, RegistrationDecisionState } from './registration-decision.reducer';

describe('RegistrationDecision Reducer', () => {
  const getState = createStateMock(registrationDecisionInitialState);
  let state: RegistrationDecisionState;

  beforeEach(() => {
    state = getState();
  });

  it('makeDecision() should set decisionMaking true', () => {
    const action = RegistrationDecisionActions.makeDecision();
    const result = reducer(state, action);

    expect(result.decisionMaking).toBeTruthy();
  });

  it('makeDecisionSuccess() should set decisionMaking false', () => {
    const action = RegistrationDecisionActions.makeDecisionSuccess();
    const result = reducer(state, action);

    expect(result.decisionMaking).toBeFalsy();
  });

  it('makeDecisionFailure() should set decisionMaking false', () => {
    const action = RegistrationDecisionActions.makeDecisionFailure({ payload: HTTP_ERROR_STUB });
    const result = reducer(state, action);

    expect(result.decisionMaking).toBeFalsy();
  });

  it('should return the previous state', () => {
    const action = {} as Action;
    const result = reducer(registrationDecisionInitialState, action);

    expect(result).toBe(registrationDecisionInitialState);
  });
});
