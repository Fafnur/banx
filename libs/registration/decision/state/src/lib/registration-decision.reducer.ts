import { Action, createReducer, on } from '@ngrx/store';

import * as RegistrationDecisionActions from './registration-decision.actions';

export const REGISTRATION_DECISION_FEATURE_KEY = 'registrationDecision';

export interface RegistrationDecisionState {
  decisionMaking: boolean;
}

export interface RegistrationDecisionPartialState {
  readonly [REGISTRATION_DECISION_FEATURE_KEY]: RegistrationDecisionState;
}

export const registrationDecisionInitialState: RegistrationDecisionState = {
  decisionMaking: false,
};

const registrationDecisionReducer = createReducer(
  registrationDecisionInitialState,
  on(RegistrationDecisionActions.makeDecision, (state) => ({
    ...state,
    decisionMaking: true,
  })),
  on(RegistrationDecisionActions.makeDecisionSuccess, (state) => ({
    ...state,
    decisionMaking: false,
  })),
  on(RegistrationDecisionActions.makeDecisionFailure, (state) => ({
    ...state,
    decisionMaking: false,
  }))
);

export function reducer(state: RegistrationDecisionState | undefined, action: Action): RegistrationDecisionState {
  return registrationDecisionReducer(state, action);
}
