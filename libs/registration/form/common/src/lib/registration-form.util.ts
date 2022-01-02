import { RegistrationForm, RegistrationFormField } from './registration-form.interface';

export function castRegistrationForm(form: RegistrationForm | RegistrationForm[] | null, mapped: boolean = false): RegistrationForm {
  const registrationForm: RegistrationForm = {};
  const forms = Array.isArray(form) ? form : form != null ? [form] : [];

  for (const formItem of forms) {
    for (const key of Object.keys(formItem)) {
      if (formItem[key] != null && ((typeof formItem[key] !== 'string' && typeof formItem[key] !== 'number') || formItem[key].length)) {
        registrationForm[key] = formItem[key];
      }
    }
  }

  if (mapped) {
    const phoneTypes = [RegistrationFormField.MobilePhone, RegistrationFormField.AdditionalContactPhoneNumber];
    for (const phoneType of phoneTypes) {
      const phoneNumber = registrationForm[phoneType];
      if (phoneNumber) {
        registrationForm[phoneType] = phoneNumber.length > 10 ? phoneNumber.slice(-10) : phoneNumber;
      }
    }

    const fieldsToNumbers = [
      RegistrationFormField.MonthlyIncome,
      RegistrationFormField.AdditionalIncomeAmount,
      RegistrationFormField.MinimalDesiredAmount,
    ];
    for (const key of fieldsToNumbers) {
      const fieldValue = registrationForm[key];
      if (fieldValue != null) {
        registrationForm[key] = Number(fieldValue);
      }
    }

    if (registrationForm[RegistrationFormField.SmsCode]) {
      delete registrationForm[RegistrationFormField.SmsCode];
    }
  }

  return registrationForm;
}
