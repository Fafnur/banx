import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, REGISTRATION_MARITAL_STATUSES, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-marital-status',
  templateUrl: './registration-marital-status.component.html',
  styleUrls: ['./registration-marital-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationMaritalStatusComponent {
  @Input() control!: UntypedFormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.MaritalStatus];
  readonly options = REGISTRATION_MARITAL_STATUSES;
}
