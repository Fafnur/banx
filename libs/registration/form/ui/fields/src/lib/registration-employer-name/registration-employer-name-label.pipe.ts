import { Pipe, PipeTransform } from '@angular/core';

import { RegistrationEmploymentType } from '@banx/registration/form/common';

export const REGISTRATION_EMPLOYER_NAME_LABELS: Record<RegistrationEmploymentType, string> = {
  [RegistrationEmploymentType.FullTime]: $localize`:Registration Employment Name By Type|:Where do you work`,
  [RegistrationEmploymentType.PartTime]: $localize`:Registration Employment Name By Type|:Where do you work`,
  [RegistrationEmploymentType.Retired]: $localize`:Registration Employment Name By Type|:Where did you worked before`,
  [RegistrationEmploymentType.Unemployed]: $localize`:Registration Employment Name By Type|:Where did you worked before`,
  [RegistrationEmploymentType.Student]: $localize`:Registration Employment Name By Type|:Where do you study`,
  [RegistrationEmploymentType.SelfEmployed]: $localize`:Registration Employment Name By Type|:Where do you work`,
  [RegistrationEmploymentType.Other]: $localize`:Registration Employment Name By Type|:Where do you work`,
};

@Pipe({
  name: 'registrationEmployerNameLabel',
})
export class RegistrationEmployerNameLabelPipe implements PipeTransform {
  transform(employmentType: RegistrationEmploymentType | null, empty: string = ''): string {
    if (employmentType && !REGISTRATION_EMPLOYER_NAME_LABELS[employmentType]) {
      console.warn(`Unknown RegistrationEmploymentType: ${employmentType}`);
    }

    return employmentType
      ? REGISTRATION_EMPLOYER_NAME_LABELS[employmentType] ?? employmentType
      : REGISTRATION_EMPLOYER_NAME_LABELS[RegistrationEmploymentType.FullTime];
  }
}
