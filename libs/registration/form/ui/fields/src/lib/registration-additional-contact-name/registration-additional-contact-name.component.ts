import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-additional-contact-name',
  templateUrl: './registration-additional-contact-name.component.html',
  styleUrls: ['./registration-additional-contact-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationAdditionalContactNameComponent {
  @Input() control!: UntypedFormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.AdditionalContactName];
}
