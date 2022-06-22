import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-address-line',
  templateUrl: './registration-address-line.component.html',
  styleUrls: ['./registration-address-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationAddressLineComponent {
  @Input() control!: UntypedFormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.AddressLine];
}
