import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { maskMinLengthValidator } from '@banx/core/forms/validators';
import { RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';
import { RussianRegistrationFormField } from '@banx/russian/registration/form/common';

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
  readonly form = new FormGroup({
    [RegistrationFormField.LastName]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.FirstName]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.MiddleName]: new FormControl(null, []),
    [RegistrationFormField.Gender]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.Birthdate]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.Email]: new FormControl(null, [Validators.required, Validators.email, maskMinLengthValidator(10)]),
    [RegistrationFormField.MobilePhone]: new FormControl(null, [Validators.required, maskMinLengthValidator(10)]),
    [RegistrationFormField.Agreement]: new FormControl(null, [Validators.required, Validators.requiredTrue]),
  });
}
