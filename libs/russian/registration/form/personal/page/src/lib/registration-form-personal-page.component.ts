import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';
import { RussianRegistrationFormField } from '@banx/russian/registration/form/common';

import { createForm } from './registration-form-personal-page.form';

@Component({
  selector: 'banx-registration-form-personal-page',
  templateUrl: './registration-form-personal-page.component.html',
  styleUrls: ['./registration-form-personal-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormPersonalPageComponent {
  readonly fields = RegistrationFormField;
  readonly russianFields = RussianRegistrationFormField;
  readonly step = RegistrationFormSubSteps.Personal;
  readonly form = createForm();
}
