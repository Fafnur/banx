import { Pipe, PipeTransform } from '@angular/core';

import { RegistrationEmploymentType } from '@banx/registration/form/common';

export const REGISTRATION_EMPLOYMENT_TYPE_LABELS: Record<RegistrationEmploymentType, string> = {
  [RegistrationEmploymentType.FullTime]: $localize`:Registration Employment Type|:Full-time`,
  [RegistrationEmploymentType.PartTime]: $localize`:Registration Employment Type|:Part-time`,
  [RegistrationEmploymentType.Retired]: $localize`:Registration Employment Type|:Retired`,
  [RegistrationEmploymentType.Unemployed]: $localize`:Registration Employment Type|:Unemployed`,
  [RegistrationEmploymentType.Student]: $localize`:Registration Employment Type|:Student`,
  [RegistrationEmploymentType.SelfEmployed]: $localize`:Registration Employment Type|:Self employed`,
  [RegistrationEmploymentType.Other]: $localize`:Registration Employment Type|:Other`,
};

@Pipe({
  name: 'registrationEmploymentTypeLabel',
})
export class RegistrationEmploymentTypeLabelPipe implements PipeTransform {
  transform(employmentType: RegistrationEmploymentType | null, empty: string = ''): string {
    if (employmentType && !REGISTRATION_EMPLOYMENT_TYPE_LABELS[employmentType]) {
      console.warn(`Unknown RegistrationEmploymentType: ${employmentType}`);
    }

    return employmentType
      ? REGISTRATION_EMPLOYMENT_TYPE_LABELS[employmentType] ?? employmentType
      : REGISTRATION_EMPLOYMENT_TYPE_LABELS[RegistrationEmploymentType.FullTime];
  }
}
