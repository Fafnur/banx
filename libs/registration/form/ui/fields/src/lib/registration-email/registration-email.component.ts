import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-email',
  templateUrl: './registration-email.component.html',
  styleUrls: ['./registration-email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationEmailComponent {
  @Input() control!: FormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.Email];
}
