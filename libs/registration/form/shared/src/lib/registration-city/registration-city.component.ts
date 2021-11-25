import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-city',
  templateUrl: './registration-city.component.html',
  styleUrls: ['./registration-city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationCityComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.City;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];
}
