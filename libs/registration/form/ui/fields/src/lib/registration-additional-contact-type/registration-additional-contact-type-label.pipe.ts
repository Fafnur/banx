import { Pipe, PipeTransform } from '@angular/core';

import { RegistrationAdditionalContactType } from '@banx/registration/form/common';

export const REGISTRATION_ADDITIONAL_CONTACT_TYPE_LABELS: Record<RegistrationAdditionalContactType, string> = {
  [RegistrationAdditionalContactType.Spouse]: $localize`:Registration Additional Contact Type|:Spouse`,
  [RegistrationAdditionalContactType.Sibling]: $localize`:Registration Additional Contact Type|:Sister/Brother`,
  [RegistrationAdditionalContactType.Parent]: $localize`:Registration Additional Contact Type|:Mother/Father`,
  [RegistrationAdditionalContactType.Friend]: $localize`:Registration Additional Contact Type|:Friend`,
  [RegistrationAdditionalContactType.Colleague]: $localize`:Registration Additional Contact Type|:Colleague`,
};

@Pipe({
  name: 'registrationAdditionalContactTypeLabel',
})
export class RegistrationAdditionalContactTypeLabelPipe implements PipeTransform {
  transform(type: RegistrationAdditionalContactType | null, empty: string = ''): string {
    if (type && !REGISTRATION_ADDITIONAL_CONTACT_TYPE_LABELS[type]) {
      console.warn(`Unknown RegistrationAdditionalContactType: ${type}`);
    }

    return type ? REGISTRATION_ADDITIONAL_CONTACT_TYPE_LABELS[type] ?? type : empty;
  }
}
