import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { RegistrationEmploymentType, RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';

@Component({
  selector: 'banx-registration-form-family-page',
  templateUrl: './registration-form-employment-page.component.html',
  styleUrls: ['./registration-form-employment-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormEmploymentPageComponent {
  readonly employmentTypes = RegistrationEmploymentType;
  readonly fields = RegistrationFormField;
  readonly step = RegistrationFormSubSteps.Employment;
  readonly form = new UntypedFormGroup({
    [RegistrationFormField.EmploymentType]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.EmployerName]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.InstitutionName]: new UntypedFormControl(null, []),
    [RegistrationFormField.JobDescription]: new UntypedFormControl(null, []),
    [RegistrationFormField.InstitutionDepartmentName]: new UntypedFormControl(null, []),
    [RegistrationFormField.MonthlyIncome]: new UntypedFormControl(null, [Validators.required]),
    [RegistrationFormField.AdditionalIncomeAmount]: new UntypedFormControl(null, []),
    [RegistrationFormField.PeriodOfEmployment]: new UntypedFormControl(null, []),
    [RegistrationFormField.PeriodOfUnemployment]: new UntypedFormControl(null, []),
  });

  get employmentType(): RegistrationEmploymentType | null {
    return this.form?.get(RegistrationFormField.EmploymentType)?.value ?? null;
  }
}
