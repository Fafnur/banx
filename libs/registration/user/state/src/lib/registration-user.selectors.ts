import { createFeatureSelector, createSelector } from '@ngrx/store';

import { REGISTRATION_USER_FEATURE_KEY, RegistrationUserState } from './registration-user.reducer';

export const selectRegistrationUserState = createFeatureSelector<RegistrationUserState>(REGISTRATION_USER_FEATURE_KEY);

export const selectUserCreating = createSelector(selectRegistrationUserState, (state) => state.userCreating);
