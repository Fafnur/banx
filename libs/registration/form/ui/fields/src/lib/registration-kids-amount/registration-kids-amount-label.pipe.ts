import { Pipe, PipeTransform } from '@angular/core';

import { RegistrationKidsAmount } from '@banx/registration/form/common';

export const REGISTRATION_KIDS_AMOUNT_LABELS: Record<RegistrationKidsAmount, string> = {
  [RegistrationKidsAmount.None]: $localize`:Registration Kids Amount|:None`,
  [RegistrationKidsAmount.One]: $localize`:Registration Kids Amount|:One`,
  [RegistrationKidsAmount.Two]: $localize`:Registration Kids Amount|:Two`,
  [RegistrationKidsAmount.Three]: $localize`:Registration Kids Amount|:Three`,
  [RegistrationKidsAmount.FourAndMore]: $localize`:Registration Kids Amount|:Four and more`,
};

@Pipe({
  name: 'registrationKidsAmountLabel',
})
export class RegistrationKidsAmountLabelPipe implements PipeTransform {
  transform(kidsAmount: RegistrationKidsAmount | null, empty: string = ''): string {
    if (kidsAmount && !REGISTRATION_KIDS_AMOUNT_LABELS[kidsAmount]) {
      console.warn(`Unknown RegistrationKidsAmount: ${kidsAmount}`);
    }

    return kidsAmount ? REGISTRATION_KIDS_AMOUNT_LABELS[kidsAmount] ?? kidsAmount : empty;
  }
}
