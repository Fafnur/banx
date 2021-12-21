import { createFeatureSelector, createSelector } from '@ngrx/store';

import { REGISTRATION_DATA_FEATURE_KEY, RegistrationDataState } from './registration-data.reducer';

export const selectRegistrationDataState = createFeatureSelector<RegistrationDataState>(REGISTRATION_DATA_FEATURE_KEY);

export const selectDataFinishing = createSelector(selectRegistrationDataState, (state: RegistrationDataState) => state.dataFinishing);
