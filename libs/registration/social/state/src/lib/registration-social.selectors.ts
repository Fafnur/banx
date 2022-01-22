import { createFeatureSelector, createSelector } from '@ngrx/store';

import { REGISTRATION_SOCIAL_FEATURE_KEY, RegistrationSocialState } from './registration-social.reducer';

export const selectRegistrationSocialState = createFeatureSelector<RegistrationSocialState>(REGISTRATION_SOCIAL_FEATURE_KEY);

export const selectSocialFinishing = createSelector(
  selectRegistrationSocialState,
  (state: RegistrationSocialState) => state.socialFinishing
);
