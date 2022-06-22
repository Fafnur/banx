import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-driver-license',
  templateUrl: './registration-driver-license.component.html',
  styleUrls: ['./registration-driver-license.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationDriverLicenseComponent {
  @Input() control!: UntypedFormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.DriverLicense];

  get invalid(): boolean {
    return this.control?.touched && this.control?.invalid;
  }
}
