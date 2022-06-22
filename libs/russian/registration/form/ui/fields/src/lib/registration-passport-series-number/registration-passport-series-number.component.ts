import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { RUSSIAN_REGISTRATION_FORM_FIELD_IDS, RussianRegistrationFormField } from '@banx/russian/registration/form/common';

@Component({
  selector: 'banx-registration-passport-series-number',
  templateUrl: './registration-passport-series-number.component.html',
  styleUrls: ['./registration-passport-series-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationPassportSeriesNumberComponent {
  @Input() control!: UntypedFormControl;

  readonly id = RUSSIAN_REGISTRATION_FORM_FIELD_IDS[RussianRegistrationFormField.PassportSeriesNumber];
}
