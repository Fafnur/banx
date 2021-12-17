import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';

import { createForm } from './registration-form-sms-page.form';

@Component({
  selector: 'banx-registration-form-sms-page',
  templateUrl: './registration-form-sms-page.component.html',
  styleUrls: ['./registration-form-sms-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormSmsPageComponent {
  readonly fields = RegistrationFormField;
  readonly step = RegistrationFormSubSteps.Sms;
  readonly form = createForm();
}
