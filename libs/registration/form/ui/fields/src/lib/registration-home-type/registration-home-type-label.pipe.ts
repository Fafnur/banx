import { Pipe, PipeTransform } from '@angular/core';

import { RegistrationHomeType } from '@banx/registration/form/common';

export const REGISTRATION_HOME_TYPE_LABELS: Record<RegistrationHomeType, string> = {
  [RegistrationHomeType.OwnProperty]: $localize`:Registration Home Type|:Own property`,
  [RegistrationHomeType.Rent]: $localize`:Registration Home Type|:Rent`,
  [RegistrationHomeType.WithFamily]: $localize`:Registration Home Type|:With Family`,
  [RegistrationHomeType.WithFriend]: $localize`:Registration Home Type|:With Friends`,
  [RegistrationHomeType.PayingGuest]: $localize`:Registration Home Type|:Paying Guest`,
};

@Pipe({
  name: 'registrationHomeTypeLabel',
})
export class RegistrationHomeTypeLabelPipe implements PipeTransform {
  transform(homeType: RegistrationHomeType | null, empty: string = ''): string {
    if (homeType && !REGISTRATION_HOME_TYPE_LABELS[homeType]) {
      console.warn(`Unknown RegistrationHomeType: ${homeType}`);
    }

    return homeType ? REGISTRATION_HOME_TYPE_LABELS[homeType] ?? homeType : empty;
  }
}
