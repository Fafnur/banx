import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-driver-license',
  templateUrl: './registration-driver-license.component.html',
  styleUrls: ['./registration-driver-license.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationDriverLicenseComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.DriverLicense;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];

  get invalid(): boolean {
    return this.control?.touched && this.control?.invalid;
  }
}
