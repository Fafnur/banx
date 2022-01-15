import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';

@Component({
  selector: 'banx-registration-form-additional-page',
  templateUrl: './registration-form-additional-page.component.html',
  styleUrls: ['./registration-form-additional-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormAdditionalPageComponent {
  readonly fields = RegistrationFormField;
  readonly step = RegistrationFormSubSteps.Additional;

  readonly form = new FormGroup({
    [RegistrationFormField.MinimalDesiredAmount]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.DriverLicense]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.OwnCar]: new FormControl(null, [Validators.required]),
  });
}
