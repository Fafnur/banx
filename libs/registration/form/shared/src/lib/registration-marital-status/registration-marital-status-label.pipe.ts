import { Pipe, PipeTransform } from '@angular/core';

import { RegistrationMaritalStatus } from '@banx/registration/form/common';

export const REGISTRATION_MARITAL_STATUS_LABELS: Record<RegistrationMaritalStatus, string> = {
  [RegistrationMaritalStatus.Single]: $localize`:Registration Marital Status|:Single`,
  [RegistrationMaritalStatus.Widower]: $localize`:Registration Marital Status|:Widower`,
  [RegistrationMaritalStatus.Divorced]: $localize`:Registration Marital Status|:Divorced`,
  [RegistrationMaritalStatus.Married]: $localize`:Registration Marital Status|:Married`,
};

@Pipe({
  name: 'registrationMaritalStatusLabel',
})
export class RegistrationMaritalStatusLabelPipe implements PipeTransform {
  transform(maritalStatus: RegistrationMaritalStatus | null, empty: string = ''): string {
    if (maritalStatus && !REGISTRATION_MARITAL_STATUS_LABELS[maritalStatus]) {
      console.warn(`Unknown RegistrationMaritalStatus: ${maritalStatus}`);
    }

    return maritalStatus ? REGISTRATION_MARITAL_STATUS_LABELS[maritalStatus] ?? maritalStatus : empty;
  }
}
