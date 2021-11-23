import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegistrationFormField } from '@banx/registration/form/common';

export function createForm(): FormGroup {
  return new FormGroup({
    [RegistrationFormField.FirstName]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.MiddleName]: new FormControl(null, []),
    [RegistrationFormField.LastName]: new FormControl(null, [Validators.required]),
  });
}
