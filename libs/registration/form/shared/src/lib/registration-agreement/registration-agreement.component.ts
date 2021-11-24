import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NavigationPaths, PATHS } from '@banx/core/navigation/common';
import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-agreement',
  templateUrl: './registration-agreement.component.html',
  styleUrls: ['./registration-agreement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationAgreementComponent {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.Agreement;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];

  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
