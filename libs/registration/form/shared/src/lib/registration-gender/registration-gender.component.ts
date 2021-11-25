import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, REGISTRATION_GENDERS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-gender',
  templateUrl: './registration-gender.component.html',
  styleUrls: ['./registration-gender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationGenderComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.Gender;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];
  readonly options = REGISTRATION_GENDERS;
}
