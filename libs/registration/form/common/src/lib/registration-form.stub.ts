import {
  RegistrationForm,
  RegistrationFormCreate,
  RegistrationFormFieldValidate,
  RegistrationFormValidate,
} from '@banx/registration/form/common';

export const REGISTRATION_FORM_STUB: RegistrationForm = {
  firstName: 'Ivan',
  middleName: 'Ivanovich',
  lastName: 'Ivanov',
};

export const REGISTRATION_FORM_VALIDATE_STUB: RegistrationFormValidate = {
  form: REGISTRATION_FORM_STUB,
  subStep: 'personal',
};

export const REGISTRATION_FORM_FIELD_VALIDATE_STUB: RegistrationFormFieldValidate = {
  field: 'lastName',
  value: 'Ivanov',
  subStep: 'personal',
};

export const REGISTRATION_FORM_CREATE_STUB: RegistrationFormCreate & { additional: { visitor: string } } = {
  form: REGISTRATION_FORM_STUB,
  additional: {
    visitor: '123456',
  },
};
