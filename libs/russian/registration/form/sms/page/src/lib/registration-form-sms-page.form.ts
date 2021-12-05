import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegistrationFormField } from '@banx/registration/form/common';

export function createForm(): FormGroup {
  return new FormGroup({
    [RegistrationFormField.SmsCode]: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    [RegistrationFormField.MobilePhone]: new FormControl(null),
  });
}
