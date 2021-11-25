import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-sms-code',
  templateUrl: './registration-sms-code.component.html',
  styleUrls: ['./registration-sms-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationSmsCodeComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.SmsCode;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];
}
