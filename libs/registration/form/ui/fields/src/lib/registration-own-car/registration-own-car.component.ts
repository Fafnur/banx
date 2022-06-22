import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-own-car',
  templateUrl: './registration-own-car.component.html',
  styleUrls: ['./registration-own-car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationOwnCarComponent {
  @Input() control!: UntypedFormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.OwnCar];

  get invalid(): boolean {
    return this.control?.touched && this.control?.invalid;
  }
}
