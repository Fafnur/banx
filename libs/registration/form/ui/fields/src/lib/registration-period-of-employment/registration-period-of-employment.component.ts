import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, REGISTRATION_PERIOD_OF_EMPLOYMENTS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-period-of-employment',
  templateUrl: './registration-period-of-employment.component.html',
  styleUrls: ['./registration-period-of-employment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationPeriodOfEmploymentComponent {
  @Input() control!: FormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.PeriodOfEmployment];
  readonly options = REGISTRATION_PERIOD_OF_EMPLOYMENTS;
}
