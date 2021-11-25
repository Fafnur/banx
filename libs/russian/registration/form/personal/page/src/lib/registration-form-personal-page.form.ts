import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegistrationFormField } from '@banx/registration/form/common';
import { russianEmailValidator, russianMaskMinLengthValidator, russianWordValidator } from '@banx/russian/forms/validators';

export function createForm(): FormGroup {
  return new FormGroup({
    [RegistrationFormField.LastName]: new FormControl(null, [Validators.required, russianWordValidator]),
    [RegistrationFormField.FirstName]: new FormControl(null, [Validators.required, russianWordValidator]),
    [RegistrationFormField.MiddleName]: new FormControl(null, [russianWordValidator]),
    [RegistrationFormField.Gender]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.Birthdate]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.Email]: new FormControl(null, [Validators.required, Validators.email, russianEmailValidator]),
    [RegistrationFormField.MobilePhone]: new FormControl(null, [Validators.required, russianMaskMinLengthValidator(10)]),
    [RegistrationFormField.Agreement]: new FormControl(null, [Validators.required, Validators.requiredTrue]),
  });
}
