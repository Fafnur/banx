import { createFeatureSelector, createSelector } from '@ngrx/store';

import { REGISTRATION_DECISION_FEATURE_KEY, RegistrationDecisionState } from './registration-decision.reducer';

export const selectRegistrationDecisionState = createFeatureSelector<RegistrationDecisionState>(REGISTRATION_DECISION_FEATURE_KEY);

export const selectDecisionMaking = createSelector(selectRegistrationDecisionState, (state) => state.decisionMaking);
