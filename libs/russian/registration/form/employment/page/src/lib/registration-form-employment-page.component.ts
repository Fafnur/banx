import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RegistrationEmploymentType, RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';

import { createForm } from './registration-form-employment-page.form';

@Component({
  selector: 'banx-registration-form-family-page',
  templateUrl: './registration-form-employment-page.component.html',
  styleUrls: ['./registration-form-employment-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormEmploymentPageComponent {
  readonly employmentTypes = RegistrationEmploymentType;
  readonly fields = RegistrationFormField;
  readonly step = RegistrationFormSubSteps.Employment;
  readonly form = createForm();

  get employmentType(): RegistrationEmploymentType | null {
    return this.form?.get(RegistrationFormField.EmploymentType)?.value ?? null;
  }
}
