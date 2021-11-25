import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-institution-department-name',
  templateUrl: './registration-institution-department-name.component.html',
  styleUrls: ['./registration-institution-department-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationInstitutionDepartmentNameComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.InstitutionDepartmentName;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];
}
