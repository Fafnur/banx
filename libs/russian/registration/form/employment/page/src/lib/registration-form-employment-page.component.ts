import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  readonly form = new FormGroup({
    [RegistrationFormField.EmploymentType]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.EmployerName]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.InstitutionName]: new FormControl(null, []),
    [RegistrationFormField.JobDescription]: new FormControl(null, []),
    [RegistrationFormField.InstitutionDepartmentName]: new FormControl(null, []),
    [RegistrationFormField.MonthlyIncome]: new FormControl(null, [Validators.required]),
    [RegistrationFormField.AdditionalIncomeAmount]: new FormControl(null, []),
    [RegistrationFormField.PeriodOfEmployment]: new FormControl(null, []),
    [RegistrationFormField.PeriodOfUnemployment]: new FormControl(null, []),
  });

  get employmentType(): RegistrationEmploymentType | null {
    return this.form?.get(RegistrationFormField.EmploymentType)?.value ?? null;
  }
}
