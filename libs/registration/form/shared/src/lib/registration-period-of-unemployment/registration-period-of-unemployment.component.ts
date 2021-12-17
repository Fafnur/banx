import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, REGISTRATION_PERIOD_OF_EMPLOYMENTS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-period-of-unemployment',
  templateUrl: './registration-period-of-unemployment.component.html',
  styleUrls: ['./registration-period-of-unemployment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationPeriodOfUnemploymentComponent {
  @Input() control!: FormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.PeriodOfUnemployment];
  readonly options = REGISTRATION_PERIOD_OF_EMPLOYMENTS;
}
