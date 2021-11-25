import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-monthly-income',
  templateUrl: './registration-monthly-income.component.html',
  styleUrls: ['./registration-monthly-income.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationMonthlyIncomeComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.MonthlyIncome;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];
}
