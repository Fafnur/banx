import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { RUSSIAN_REGISTRATION_FORM_FIELD_IDS, RussianRegistrationFormField } from '@banx/russian/registration/form/common';

@Component({
  selector: 'banx-registration-passport-birthplace',
  templateUrl: './registration-passport-birthplace.component.html',
  styleUrls: ['./registration-passport-birthplace.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationPassportBirthplaceComponent {
  @Input() control!: FormControl;

  readonly id = RUSSIAN_REGISTRATION_FORM_FIELD_IDS[RussianRegistrationFormField.PassportBirthplace];
}
