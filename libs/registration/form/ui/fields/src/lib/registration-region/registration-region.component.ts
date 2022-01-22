import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-region',
  templateUrl: './registration-region.component.html',
  styleUrls: ['./registration-region.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationRegionComponent {
  @Input() control!: FormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.Region];
}
