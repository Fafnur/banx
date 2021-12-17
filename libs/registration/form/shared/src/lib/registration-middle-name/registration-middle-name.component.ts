import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-middle-name',
  templateUrl: './registration-middle-name.component.html',
  styleUrls: ['./registration-middle-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationMiddleNameComponent {
  @Input() control!: FormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.MiddleName];
}
