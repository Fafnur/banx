import { createStoreMock } from '@banx/core/store/utils';
import { REGISTRATION_FORM_STUB } from '@banx/registration/form/common';

import {
  REGISTRATION_FORM_FEATURE_KEY,
  registrationFormInitialState,
  RegistrationFormPartialState,
  RegistrationFormState,
} from './registration-form.reducer';
import * as RegistrationFormSelectors from './registration-form.selectors';

describe('RegistrationForm Selectors', () => {
  const getStore = createStoreMock<RegistrationFormState, RegistrationFormPartialState>(
    REGISTRATION_FORM_FEATURE_KEY,
    registrationFormInitialState
  );
  let store: RegistrationFormPartialState;

  it('selectForm() should return form', () => {
    store = getStore({ form: REGISTRATION_FORM_STUB });
    const results = RegistrationFormSelectors.selectForm(store);

    expect(results).toEqual(REGISTRATION_FORM_STUB);
  });

  it('selectFormLoaded() should return formLoaded', () => {
    store = getStore({ formLoaded: true });
    const result = RegistrationFormSelectors.selectFormLoaded(store);

    expect(result).toBeTruthy();
  });

  it('selectFormLoading() should return formLoading', () => {
    store = getStore({ formLoading: true });
    const result = RegistrationFormSelectors.selectFormLoading(store);

    expect(result).toBeTruthy();
  });

  it('selectFormCreating() should return formCreating', () => {
    store = getStore({ formCreating: true });
    const result = RegistrationFormSelectors.selectFormCreating(store);

    expect(result).toBeTruthy();
  });

  it('selectFormValidating() should return formValidating', () => {
    store = getStore({ formValidating: true });
    const result = RegistrationFormSelectors.selectFormValidating(store);

    expect(result).toBeTruthy();
  });
});
