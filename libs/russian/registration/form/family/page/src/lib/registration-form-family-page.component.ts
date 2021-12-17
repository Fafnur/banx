import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';

import { createForm } from './registration-form-family-page.form';

@Component({
  selector: 'banx-registration-form-family-page',
  templateUrl: './registration-form-family-page.component.html',
  styleUrls: ['./registration-form-family-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormFamilyPageComponent {
  readonly fields = RegistrationFormField;
  readonly step = RegistrationFormSubSteps.Family;
  readonly form = createForm();
}
