import { Pipe, PipeTransform } from '@angular/core';

import { RegistrationDependentsAmount } from '@banx/registration/form/common';

export const REGISTRATION_DEPENDENTS_AMOUNT_LABELS: Record<RegistrationDependentsAmount, string> = {
  [RegistrationDependentsAmount.None]: $localize`:Registration Additional Contact Type|:None`,
  [RegistrationDependentsAmount.One]: $localize`:Registration Additional Contact Type|:One`,
  [RegistrationDependentsAmount.Two]: $localize`:Registration Additional Contact Type|:Two`,
  [RegistrationDependentsAmount.Three]: $localize`:Registration Additional Contact Type|:Three`,
  [RegistrationDependentsAmount.FourAndMore]: $localize`:Registration Additional Contact Type|:Four and more`,
};

@Pipe({
  name: 'registrationDependentsAmountLabel',
})
export class RegistrationDependentsAmountLabelPipe implements PipeTransform {
  transform(amount: RegistrationDependentsAmount | null, empty: string = ''): string {
    if (amount && !REGISTRATION_DEPENDENTS_AMOUNT_LABELS[amount]) {
      console.warn(`Unknown RegistrationDependentsAmount: ${amount}`);
    }

    return amount ? REGISTRATION_DEPENDENTS_AMOUNT_LABELS[amount] ?? amount : empty;
  }
}
