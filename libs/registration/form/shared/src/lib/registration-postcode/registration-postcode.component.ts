import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-postcode',
  templateUrl: './registration-postcode.component.html',
  styleUrls: ['./registration-postcode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationPostcodeComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.Postcode;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];
}
