import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { maskMinLengthValidator } from '@banx/core/forms/validators';
import { RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';

@Component({
  selector: 'banx-registration-form-family-page',
  templateUrl: './registration-form-family-page.component.html',
  styleUrls: ['./registration-form-family-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormFamilyPageComponent {
  readonly fields = RegistrationFormField;
  readonly step = RegistrationFormSubSteps.Family;
  readonly form = new FormGroup({
    [RegistrationFormField.Region]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.City]: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    [RegistrationFormField.AddressLine]: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    [RegistrationFormField.Postcode]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.HomeType]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.MaritalStatus]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.KidsAmount]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.DependentsAmount]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.AdditionalContactName]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.AdditionalContactType]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.AdditionalContactPhoneNumber]: new FormControl(null, [Validators.required, maskMinLengthValidator(10)]),
  });
}
