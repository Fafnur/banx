import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-postcode',
  templateUrl: './registration-postcode.component.html',
  styleUrls: ['./registration-postcode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationPostcodeComponent {
  @Input() control!: UntypedFormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.Postcode];
}
