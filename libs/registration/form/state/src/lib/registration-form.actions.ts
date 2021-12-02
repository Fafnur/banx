import { createAction } from '@ngrx/store';

import { payload } from '@banx/core/store/utils';
import {
  RegistrationForm,
  RegistrationFormFieldValidate,
  RegistrationFormRestore,
  RegistrationFormValidate,
} from '@banx/registration/form/common';

export const init = createAction('[RegistrationForm] Init');

export const restore = createAction('[RegistrationForm] Restore', payload<RegistrationFormRestore>());

export const loadForm = createAction('[RegistrationForm] Load Form');

export const loadFormSuccess = createAction('[RegistrationForm] Load Form Success', payload<RegistrationForm>());

export const loadFormFailure = createAction('[RegistrationForm] Load Form Failure', payload<Record<string, any>>());

export const createForm = createAction('[RegistrationForm] Create Form');

export const createFormSuccess = createAction('[RegistrationForm] Create Form Success');

export const createFormFailure = createAction('[RegistrationForm] Create Form Failure', payload<Record<string, any>>());

export const validateForm = createAction('[RegistrationForm] Validate Form', payload<RegistrationFormValidate>());

export const validateFormSuccess = createAction('[RegistrationForm] Validate Form Success');

export const validateFormFailure = createAction('[RegistrationForm] Validate Form Failure', payload<Record<string, any>>());

export const validateFormField = createAction('[RegistrationForm] Validate Form Field', payload<RegistrationFormFieldValidate>());

export const validateFormFieldSuccess = createAction('[RegistrationForm] Validate Form Field Success', payload<string>());

export const validateFormFieldFailure = createAction(
  '[RegistrationForm] Validate Form Field Failure',
  payload<Record<string, any> & { field: string }>()
);

export const updateForm = createAction('[RegistrationForm] Update Form', payload<Partial<RegistrationForm>>());
