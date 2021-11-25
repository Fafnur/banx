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
  transform(additionalContactType: RegistrationAdditionalContactType): string {
    if (!REGISTRATION_ADDITIONAL_CONTACT_TYPE_LABELS[additionalContactType]) {
      console.warn(`Unknown RegistrationAdditionalContactType: ${additionalContactType}`);
    }

    return REGISTRATION_ADDITIONAL_CONTACT_TYPE_LABELS[additionalContactType];
  }
}
