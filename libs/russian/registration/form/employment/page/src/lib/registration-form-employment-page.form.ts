import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegistrationFormField } from '@banx/registration/form/common';

export function createForm(): FormGroup {
  return new FormGroup({
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
}
