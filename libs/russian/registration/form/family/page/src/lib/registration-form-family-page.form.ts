import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegistrationFormField } from '@banx/registration/form/common';

export function createForm(): FormGroup {
  return new FormGroup({
    [RegistrationFormField.City]: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    [RegistrationFormField.AddressLine]: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    [RegistrationFormField.Postcode]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.HomeType]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.MaritalStatus]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.KidsAmount]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.DependentsAmount]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.AdditionalContactName]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.AdditionalContactType]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.AdditionalContactPhoneNumber]: new FormControl(null, [Validators.required]),
  });
}
