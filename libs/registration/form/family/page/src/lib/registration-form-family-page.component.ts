import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

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
  readonly form = new UntypedFormGroup({
    [RegistrationFormField.Region]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.City]: new UntypedFormControl(null, [Validators.required, Validators.minLength(2)]),
    [RegistrationFormField.AddressLine]: new UntypedFormControl(null, [Validators.required, Validators.minLength(5)]),
    [RegistrationFormField.Postcode]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.HomeType]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.MaritalStatus]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.KidsAmount]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.DependentsAmount]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.AdditionalContactName]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.AdditionalContactType]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.AdditionalContactPhoneNumber]: new UntypedFormControl(null, [Validators.required, maskMinLengthValidator(10)]),
  });
}
