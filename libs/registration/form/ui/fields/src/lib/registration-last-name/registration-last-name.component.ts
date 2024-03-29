import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-last-name',
  templateUrl: './registration-last-name.component.html',
  styleUrls: ['./registration-last-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationLastNameComponent {
  @Input() control!: UntypedFormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.LastName];
}
