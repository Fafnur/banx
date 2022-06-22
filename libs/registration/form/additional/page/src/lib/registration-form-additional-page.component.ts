import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

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

  readonly form = new UntypedFormGroup({
    [RegistrationFormField.MinimalDesiredAmount]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.DriverLicense]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.OwnCar]: new UntypedFormControl(null, [Validators.required]),
  });
}
