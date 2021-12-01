import { createFeatureSelector, createSelector } from '@ngrx/store';

import { REGISTRATION_FORM_FEATURE_KEY, RegistrationFormState } from './registration-form.reducer';

export const selectRegistrationFormState = createFeatureSelector<RegistrationFormState>(REGISTRATION_FORM_FEATURE_KEY);

export const selectForm = createSelector(selectRegistrationFormState, (state) => state.form);

export const selectFormFull = createSelector(selectRegistrationFormState, (state) => state.formFull);

export const selectFormLoaded = createSelector(selectRegistrationFormState, (state) => state.formLoaded);

export const selectFormLoading = createSelector(selectRegistrationFormState, (state) => state.formLoading);

export const selectFormCreating = createSelector(selectRegistrationFormState, (state) => state.formCreating);

export const selectFormValidating = createSelector(selectRegistrationFormState, (state) => state.formValidating);
