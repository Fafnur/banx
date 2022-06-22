import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';

@Component({
  selector: 'banx-registration-form-sms-page',
  templateUrl: './registration-form-sms-page.component.html',
  styleUrls: ['./registration-form-sms-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormSmsPageComponent {
  readonly fields = RegistrationFormField;
  readonly step = RegistrationFormSubSteps.Sms;
  readonly form = new UntypedFormGroup({
    [RegistrationFormField.SmsCode]: new UntypedFormControl(null, [Validators.required, Validators.minLength(4)]),
    [RegistrationFormField.MobilePhone]: new UntypedFormControl(null),
  });
}
