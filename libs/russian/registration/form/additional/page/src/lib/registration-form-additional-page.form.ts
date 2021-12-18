import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegistrationFormField } from '@banx/registration/form/common';

export function createForm(): FormGroup {
  return new FormGroup({
    [RegistrationFormField.MinimalDesiredAmount]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.DriverLicense]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.OwnCar]: new FormControl(null, [Validators.required]),
  });
}
