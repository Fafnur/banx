import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-minimal-desired-amount',
  templateUrl: './registration-minimal-desired-amount.component.html',
  styleUrls: ['./registration-minimal-desired-amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationMinimalDesiredAmountComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.MinimalDesiredAmount;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];
}
