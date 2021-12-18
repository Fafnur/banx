import { Pipe, PipeTransform } from '@angular/core';

import { RegistrationEmploymentType } from '@banx/registration/form/common';

export const REGISTRATION_JOB_DESCRIPTION_LABELS: Record<RegistrationEmploymentType, string> = {
  [RegistrationEmploymentType.FullTime]: $localize`:Registration Job Description By Type|:What do you do`,
  [RegistrationEmploymentType.PartTime]: $localize`:Registration Job Description By Type|:What do you do`,
  [RegistrationEmploymentType.Retired]: $localize`:Registration Job Description By Type|:What did you do`,
  [RegistrationEmploymentType.Unemployed]: $localize`:Registration Job Description By Type|:What did you do`,
  [RegistrationEmploymentType.Student]: $localize`:Registration Job Description By Type|:What’s your major`,
  [RegistrationEmploymentType.SelfEmployed]: $localize`:Registration Job Description By Type|:What do you do`,
  [RegistrationEmploymentType.Other]: $localize`:Registration Job Description By Type|:What do you do`,
};

@Pipe({
  name: 'registrationJobDescriptionLabel',
})
export class RegistrationJobDescriptionLabelPipe implements PipeTransform {
  transform(employmentType: RegistrationEmploymentType | null, empty: string = ''): string {
    if (employmentType && !REGISTRATION_JOB_DESCRIPTION_LABELS[employmentType]) {
      console.warn(`Unknown RegistrationEmploymentType: ${employmentType}`);
    }

    return employmentType
      ? REGISTRATION_JOB_DESCRIPTION_LABELS[employmentType] ?? employmentType
      : REGISTRATION_JOB_DESCRIPTION_LABELS[RegistrationEmploymentType.FullTime];
  }
}
