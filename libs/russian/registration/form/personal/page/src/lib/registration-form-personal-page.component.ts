import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

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
  readonly form = new UntypedFormGroup({
    [RegistrationFormField.LastName]: new UntypedFormControl(null, [Validators.required, russianWordValidator]),
    [RegistrationFormField.FirstName]: new UntypedFormControl(null, [Validators.required, russianWordValidator]),
    [RegistrationFormField.MiddleName]: new UntypedFormControl(null, [russianWordValidator]),
    [RegistrationFormField.Gender]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.Birthdate]: new UntypedFormControl(null, [Validators.required]),
    [RussianRegistrationFormField.PassportSeriesNumber]: new UntypedFormControl(null, [Validators.required, russianMaskMinLengthValidator(10)]),
    [RussianRegistrationFormField.PassportIssueCode]: new UntypedFormControl(null, [Validators.required, russianMaskMinLengthValidator(6)]),
    [RussianRegistrationFormField.PassportIssueName]: new UntypedFormControl(null, [Validators.required, russianMaskMinLengthValidator(5)]),
    [RussianRegistrationFormField.PassportIssueDate]: new UntypedFormControl(null, [Validators.required]),
    [RussianRegistrationFormField.PassportBirthplace]: new UntypedFormControl(null, [Validators.required, russianMaskMinLengthValidator(2)]),
    [RegistrationFormField.Email]: new UntypedFormControl(null, [Validators.required, Validators.email, russianEmailValidator]),
    [RegistrationFormField.MobilePhone]: new UntypedFormControl(null, [Validators.required, russianMaskMinLengthValidator(10)]),
    [RegistrationFormField.Agreement]: new UntypedFormControl(null, [Validators.required, Validators.requiredTrue]),
  });
}
