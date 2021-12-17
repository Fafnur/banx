import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationEmploymentType, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-employer-name',
  templateUrl: './registration-employer-name.component.html',
  styleUrls: ['./registration-employer-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationEmployerNameComponent {
  @Input() control!: FormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.EmployerName];

  get employmentType(): RegistrationEmploymentType | null {
    return this.control?.parent?.get(RegistrationFormField.EmploymentType)?.value ?? null;
  }
}
