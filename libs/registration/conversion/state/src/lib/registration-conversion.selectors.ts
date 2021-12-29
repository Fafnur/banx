import { createFeatureSelector, createSelector } from '@ngrx/store';

import { REGISTRATION_CONVERSION_FEATURE_KEY, RegistrationConversionState } from './registration-conversion.reducer';

export const selectRegistrationConversionState = createFeatureSelector<RegistrationConversionState>(REGISTRATION_CONVERSION_FEATURE_KEY);

export const selectConversionLoading = createSelector(selectRegistrationConversionState, (state) => state.conversionLoading);

export const selectConversionComplete = createSelector(selectRegistrationConversionState, (state) => state.conversionComplete);
