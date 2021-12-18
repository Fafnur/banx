import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';

import { createForm } from './registration-form-additional-page.form';

@Component({
  selector: 'banx-registration-form-additional-page',
  templateUrl: './registration-form-additional-page.component.html',
  styleUrls: ['./registration-form-additional-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormAdditionalPageComponent {
  readonly fields = RegistrationFormField;
  readonly step = RegistrationFormSubSteps.Additional;
  readonly form = createForm();
}
