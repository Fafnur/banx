import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { RUSSIAN_REGISTRATION_FORM_FIELD_IDS, RussianRegistrationFormField } from '@banx/russian/registration/form/common';

@Component({
  selector: 'banx-registration-passport-issue-code',
  templateUrl: './registration-passport-issue-code.component.html',
  styleUrls: ['./registration-passport-issue-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationPassportIssueCodeComponent {
  @Input() control!: UntypedFormControl;

  readonly id = RUSSIAN_REGISTRATION_FORM_FIELD_IDS[RussianRegistrationFormField.PassportIssueCode];
}
