import { Pipe, PipeTransform } from '@angular/core';

import { RegistrationPeriodOfEmployment } from '@banx/registration/form/common';

export const REGISTRATION_PERIOD_OF_UNEMPLOYMENT_LABELS: Record<RegistrationPeriodOfEmployment, string> = {
  [RegistrationPeriodOfEmployment.LessThanMonth]: $localize`:Registration Period Of Employment|:Less than a month`,
  [RegistrationPeriodOfEmployment.OneThreeMonths]: $localize`:Registration Period Of Employment|:1-3 months`,
  [RegistrationPeriodOfEmployment.ThreeTwelveMonths]: $localize`:Registration Period Of Employment|:3-12 months`,
  [RegistrationPeriodOfEmployment.MoreThanTwelveMonths]: $localize`:Registration Period Of Employment|:More than 12 months`,
};

@Pipe({
  name: 'registrationPeriodOfUnemploymentLabel',
})
export class RegistrationPeriodOfUnemploymentLabelPipe implements PipeTransform {
  transform(periodOfEmployment: RegistrationPeriodOfEmployment | null, empty: string = ''): string {
    if (periodOfEmployment && !REGISTRATION_PERIOD_OF_UNEMPLOYMENT_LABELS[periodOfEmployment]) {
      console.warn(`Unknown RegistrationPeriodOfEmployment: ${periodOfEmployment}`);
    }

    return periodOfEmployment ? REGISTRATION_PERIOD_OF_UNEMPLOYMENT_LABELS[periodOfEmployment] ?? periodOfEmployment : empty;
  }
}
