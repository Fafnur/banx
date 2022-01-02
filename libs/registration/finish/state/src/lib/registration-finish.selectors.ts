import { createFeatureSelector, createSelector } from '@ngrx/store';

import { REGISTRATION_FINISH_FEATURE_KEY, RegistrationFinishState } from './registration-finish.reducer';

export const selectRegistrationFinishState = createFeatureSelector<RegistrationFinishState>(REGISTRATION_FINISH_FEATURE_KEY);

export const selectRegistrationFinishing = createSelector(selectRegistrationFinishState, (state) => state.registrationFinishing);
