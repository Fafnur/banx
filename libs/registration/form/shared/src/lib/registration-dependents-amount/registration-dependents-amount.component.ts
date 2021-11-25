import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_DEPENDENTS_AMOUNTS, REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-dependents-amount',
  templateUrl: './registration-dependents-amount.component.html',
  styleUrls: ['./registration-dependents-amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationDependentsAmountComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.DependentsAmount;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];
  readonly options = REGISTRATION_DEPENDENTS_AMOUNTS;
}
