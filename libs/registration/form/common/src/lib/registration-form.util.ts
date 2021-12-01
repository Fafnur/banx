import { RegistrationForm } from './registration-form.interface';

export function castRegistrationForm(lastForm: RegistrationForm | null, form: RegistrationForm | null): RegistrationForm {
  const registrationForm: RegistrationForm = {};

  if (form) {
    for (const key of Object.keys(form)) {
      if (form[key] != null) {
        registrationForm[key] = form[key];
      }
    }
  }

  if (lastForm) {
    for (const key of Object.keys(lastForm)) {
      if (lastForm[key] != null) {
        registrationForm[key] = lastForm[key];
      }
    }
  }

  return registrationForm;
}
