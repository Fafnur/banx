import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, REGISTRATION_HOME_TYPES, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-home-type',
  templateUrl: './registration-home-type.component.html',
  styleUrls: ['./registration-home-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationHomeTypeComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.HomeType;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];
  readonly options = REGISTRATION_HOME_TYPES;
}
