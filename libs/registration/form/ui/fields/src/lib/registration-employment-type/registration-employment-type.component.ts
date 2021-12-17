import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_EMPLOYMENT_TYPES, REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-employment-type',
  templateUrl: './registration-employment-type.component.html',
  styleUrls: ['./registration-employment-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationEmploymentTypeComponent {
  @Input() control!: FormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.EmploymentType];
  readonly options = REGISTRATION_EMPLOYMENT_TYPES;
}
