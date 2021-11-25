import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationEmploymentType, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-job-description',
  templateUrl: './registration-job-description.component.html',
  styleUrls: ['./registration-job-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationJobDescriptionComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.JobDescription;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];

  get employmentType(): RegistrationEmploymentType | null {
    return this.control?.parent?.get(RegistrationFormField.EmploymentType)?.value ?? null;
  }
}
