import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-institution-name',
  templateUrl: './registration-institution-name.component.html',
  styleUrls: ['./registration-institution-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationInstitutionNameComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.InstitutionName;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];
}
