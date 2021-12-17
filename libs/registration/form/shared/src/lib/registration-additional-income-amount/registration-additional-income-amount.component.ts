import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-additional-income-amount',
  templateUrl: './registration-additional-income-amount.component.html',
  styleUrls: ['./registration-additional-income-amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationAdditionalIncomeAmountComponent {
  @Input() control!: FormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.AdditionalIncomeAmount];
}
