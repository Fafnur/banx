import { RegistrationForm, RegistrationFormField } from './registration-form.interface';

export function castRegistrationForm(lastForm: RegistrationForm | null, form?: RegistrationForm | null): RegistrationForm {
  const registrationForm: RegistrationForm = {};

  if (form) {
    for (const key of Object.keys(form)) {
      if (form[key] != null && ((typeof form[key] !== 'string' && typeof form[key] !== 'number') || form[key].length)) {
        registrationForm[key] = form[key];
      }
    }
  }

  if (lastForm) {
    for (const key of Object.keys(lastForm)) {
      if (lastForm[key] != null && ((typeof lastForm[key] !== 'string' && typeof lastForm[key] !== 'number') || lastForm[key].length)) {
        registrationForm[key] = lastForm[key];
      }
    }
  }

  const phoneTypes = [RegistrationFormField.MobilePhone, RegistrationFormField.AdditionalContactPhoneNumber];
  for (const phoneType of phoneTypes) {
    const phoneNumber = registrationForm[phoneType];
    if (phoneNumber) {
      registrationForm[phoneType] = phoneNumber.length > 10 ? phoneNumber.slice(-10) : phoneNumber;
    }
  }

  return registrationForm;
}
