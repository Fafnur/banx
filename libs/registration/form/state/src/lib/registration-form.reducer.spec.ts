import { Action } from '@ngrx/store';

import { HTTP_ERROR_STUB } from '@banx/core/api/service';
import { createStateMock } from '@banx/core/store/utils';
import { REGISTRATION_FORM_STUB, REGISTRATION_FORM_VALIDATE_STUB } from '@banx/registration/form/common';

import * as RegistrationFormActions from './registration-form.actions';
import { reducer, registrationFormInitialState, RegistrationFormState } from './registration-form.reducer';

describe('RegistrationForm Reducer', () => {
  const getState = createStateMock(registrationFormInitialState);
  let state: RegistrationFormState;

  beforeEach(() => {
    state = getState();
  });

  it('loadForm() should set formLoading true', () => {
    const action = RegistrationFormActions.loadForm();
    const result = reducer(state, action);

    expect(result.formLoading).toBeTruthy();
  });

  it('loadFormSuccess() should set formLoading true and form', () => {
    const action = RegistrationFormActions.loadFormSuccess({ payload: REGISTRATION_FORM_STUB });
    const result = reducer(state, action);

    expect(result.form).toEqual(REGISTRATION_FORM_STUB);
    expect(result.formLoaded).toBeTruthy();
    expect(result.formLoading).toBeFalsy();
  });

  it('loadFormFailure() should set formLoading false', () => {
    const action = RegistrationFormActions.loadFormFailure({ payload: HTTP_ERROR_STUB });
    const result = reducer(state, action);

    expect(result.formLoaded).toBeTruthy();
    expect(result.formLoading).toBeFalsy();
  });

  it('createForm() should set formCreating true', () => {
    const action = RegistrationFormActions.createForm();
    const result = reducer(state, action);

    expect(result.formCreating).toBeTruthy();
  });

  it('createFormSuccess() should set formLoading false', () => {
    const action = RegistrationFormActions.createFormSuccess();
    const result = reducer(state, action);

    expect(result.formCreating).toBeFalsy();
  });

  it('createFormFailure() should set formCreating false', () => {
    const action = RegistrationFormActions.createFormFailure({ payload: HTTP_ERROR_STUB });
    const result = reducer(state, action);

    expect(result.formCreating).toBeFalsy();
  });

  it('validateForm() should set formCreating true', () => {
    const action = RegistrationFormActions.validateForm({ payload: REGISTRATION_FORM_VALIDATE_STUB });
    const result = reducer(state, action);

    expect(result.formValidating).toBeTruthy();
  });

  it('validateFormSuccess() should set formLoading false', () => {
    const action = RegistrationFormActions.validateFormSuccess();
    const result = reducer(state, action);

    expect(result.formValidating).toBeFalsy();
  });

  it('validateFormFailure() should set formCreating false', () => {
    const action = RegistrationFormActions.validateFormFailure({ payload: HTTP_ERROR_STUB });
    const result = reducer(state, action);

    expect(result.formValidating).toBeFalsy();
  });

  it('should return the previous state', () => {
    const result = reducer(registrationFormInitialState, {} as Action);

    expect(result).toBe(registrationFormInitialState);
  });
});
