import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, REGISTRATION_HOME_TYPES, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-home-type',
  templateUrl: './registration-home-type.component.html',
  styleUrls: ['./registration-home-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationHomeTypeComponent {
  @Input() control!: UntypedFormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.HomeType];
  readonly options = REGISTRATION_HOME_TYPES;
}
