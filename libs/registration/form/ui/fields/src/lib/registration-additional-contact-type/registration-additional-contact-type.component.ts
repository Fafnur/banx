import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { REGISTRATION_ADDITIONAL_CONTACT_TYPES, REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-additional-contact-type',
  templateUrl: './registration-additional-contact-type.component.html',
  styleUrls: ['./registration-additional-contact-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationAdditionalContactTypeComponent {
  @Input() control!: UntypedFormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.AdditionalContactType];
  readonly options = REGISTRATION_ADDITIONAL_CONTACT_TYPES;
}
