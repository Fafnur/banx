import { Pipe, PipeTransform } from '@angular/core';

import { RegistrationGender } from '@banx/registration/form/common';

export const REGISTRATION_GENDER_LABELS = {
  [RegistrationGender.Male]: 'Male',
  [RegistrationGender.Female]: 'Female',
  [RegistrationGender.Transgender]: 'Transgender',
};

@Pipe({
  name: 'registrationGenderLabel',
})
export class RegistrationGenderLabelPipe implements PipeTransform {
  transform(gender: RegistrationGender | null, empty: string = ''): string {
    if (gender && !REGISTRATION_GENDER_LABELS[gender]) {
      console.warn(`Unknown RegistrationGender: ${gender}`);
    }

    return gender ? REGISTRATION_GENDER_LABELS[gender] ?? gender : empty;
  }
}
