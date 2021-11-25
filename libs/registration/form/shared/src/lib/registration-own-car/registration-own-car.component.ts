import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-own-car',
  templateUrl: './registration-own-car.component.html',
  styleUrls: ['./registration-own-car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationOwnCarComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.OwnCar;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];

  get invalid(): boolean {
    return this.control?.touched && this.control?.invalid;
  }
}
