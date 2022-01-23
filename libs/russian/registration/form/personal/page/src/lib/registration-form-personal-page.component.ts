import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';
import { russianEmailValidator, russianMaskMinLengthValidator, russianWordValidator } from '@banx/russian/forms/validators';
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
    [RegistrationFormField.LastName]: new FormControl(null, [Validators.required, russianWordValidator]),
    [RegistrationFormField.FirstName]: new FormControl(null, [Validators.required, russianWordValidator]),
    [RegistrationFormField.MiddleName]: new FormControl(null, [russianWordValidator]),
    [RegistrationFormField.Gender]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.Birthdate]: new FormControl(null, [Validators.required]),
    [RussianRegistrationFormField.PassportSeriesNumber]: new FormControl(null, [Validators.required, russianMaskMinLengthValidator(10)]),
    [RussianRegistrationFormField.PassportIssueCode]: new FormControl(null, [Validators.required, russianMaskMinLengthValidator(6)]),
    [RussianRegistrationFormField.PassportIssueName]: new FormControl(null, [Validators.required, russianMaskMinLengthValidator(5)]),
    [RussianRegistrationFormField.PassportIssueDate]: new FormControl(null, [Validators.required]),
    [RussianRegistrationFormField.PassportBirthplace]: new FormControl(null, [Validators.required, russianMaskMinLengthValidator(2)]),
    [RegistrationFormField.Email]: new FormControl(null, [Validators.required, Validators.email, russianEmailValidator]),
    [RegistrationFormField.MobilePhone]: new FormControl(null, [Validators.required, russianMaskMinLengthValidator(10)]),
    [RegistrationFormField.Agreement]: new FormControl(null, [Validators.required, Validators.requiredTrue]),
  });
}