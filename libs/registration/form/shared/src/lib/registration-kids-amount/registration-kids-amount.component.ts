import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, REGISTRATION_KIDS_AMOUNTS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-kids-amount',
  templateUrl: './registration-kids-amount.component.html',
  styleUrls: ['./registration-kids-amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationKidsAmountComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.KidsAmount;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];
  readonly options = REGISTRATION_KIDS_AMOUNTS;
}
