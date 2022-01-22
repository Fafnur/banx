import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-first-name',
  templateUrl: './registration-first-name.component.html',
  styleUrls: ['./registration-first-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFirstNameComponent {
  @Input() control!: FormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.FirstName];
}
