import { Action, createReducer, on } from '@ngrx/store';

import { castRegistrationForm, RegistrationForm } from '@banx/registration/form/common';

import * as RegistrationFormActions from './registration-form.actions';

export const REGISTRATION_FORM_FEATURE_KEY = 'registrationForm';

export interface RegistrationFormState {
  form: RegistrationForm | null;
  formFull: RegistrationForm | null;
  formLoading: boolean;
  formLoaded: boolean;
  formCreating: boolean;
  formValidating: boolean;
}

export interface RegistrationFormPartialState {
  readonly [REGISTRATION_FORM_FEATURE_KEY]: RegistrationFormState;
}

export const registrationFormInitialState: RegistrationFormState = {
  form: null,
  formFull: null,
  formLoading: false,
  formLoaded: false,
  formCreating: false,
  formValidating: false,
};

const registrationFormReducer = createReducer(
  registrationFormInitialState,
  on(RegistrationFormActions.restore, (state, { payload }) => ({
    ...state,
    formFull: payload.form,
  })),
  on(RegistrationFormActions.loadForm, (state) => ({
    ...state,
    formLoading: true,
  })),
  on(RegistrationFormActions.loadFormSuccess, (state, { payload }) => ({
    ...state,
    formFull: castRegistrationForm(state.form, payload),
    formLoaded: true,
    formLoading: false,
  })),
  on(RegistrationFormActions.loadFormFailure, (state) => ({
    ...state,
    formLoaded: true,
    formLoading: false,
  })),
  on(RegistrationFormActions.createForm, (state) => ({
    ...state,
    formCreating: true,
  })),
  on(RegistrationFormActions.createFormSuccess, (state) => ({
    ...state,
    formCreating: false,
  })),
  on(RegistrationFormActions.createFormFailure, (state) => ({
    ...state,
    formCreating: false,
  })),
  on(RegistrationFormActions.validateForm, (state) => ({
    ...state,
    formValidating: true,
  })),
  on(RegistrationFormActions.validateFormSuccess, (state) => ({
    ...state,
    formValidating: false,
  })),
  on(RegistrationFormActions.validateFormFailure, (state) => ({
    ...state,
    formValidating: false,
  })),
  on(RegistrationFormActions.updateForm, (state, { payload }) => ({
    ...state,
    form: castRegistrationForm(payload, state.form),
    formFull: state.formFull
      ? { ...state.formFull, ...castRegistrationForm(payload, state.form) }
      : castRegistrationForm(payload, state.form),
  }))
);

export function reducer(state: RegistrationFormState | undefined, action: Action): RegistrationFormState {
  return registrationFormReducer(state, action);
}
