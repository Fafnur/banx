import { Pipe, PipeTransform } from '@angular/core';

import { RegistrationErrorType } from '@banx/registration/form/common';

export const REGISTRATION_ERROR_TYPE_LABELS: Record<RegistrationErrorType, string> = {
  [RegistrationErrorType.IsNotEmpty]: $localize`:Registration Error Type|:Is Not Empty`,
  [RegistrationErrorType.IsLength]: $localize`:Registration Error Type|:Is Length`,
  [RegistrationErrorType.IsBoolean]: $localize`:Registration Error Type|:Is Boolean`,
  [RegistrationErrorType.IsDateString]: $localize`:Registration Error Type|:Is Date String`,
  [RegistrationErrorType.IsEmail]: $localize`:Registration Error Type|:Is Email`,
  [RegistrationErrorType.IsEnum]: $localize`:Registration Error Type|:Is Enum`,
  [RegistrationErrorType.IsOptional]: $localize`:Registration Error Type|:Is Optional`,
  [RegistrationErrorType.IsSpell]: $localize`:Registration Error Type|:Is Spell`,
  [RegistrationErrorType.IsServer]: $localize`:Registration Error Type|:Is Server`,
  [RegistrationErrorType.Required]: $localize`:Registration Error Type|:Required`,
  [RegistrationErrorType.RequiredTrue]: $localize`:Registration Error Type|:Required True`,
  [RegistrationErrorType.MinLength]: $localize`:Registration Error Type|:Min Length`,
  [RegistrationErrorType.MaxLength]: $localize`:Registration Error Type|:Max Length`,
  [RegistrationErrorType.Min]: $localize`:Registration Error Type|:Min`,
  [RegistrationErrorType.Max]: $localize`:Registration Error Type|:Max`,
  [RegistrationErrorType.Email]: $localize`:Registration Error Type|:Email`,
};

@Pipe({
  name: 'registrationFormError',
})
export class RegistrationFormErrorPipe implements PipeTransform {
  transform(errors: Record<string, any> | null | undefined): string {
    if (!errors) {
      return '';
    }

    const errorsKeys = Object.keys(errors);
    const errorsKey = errorsKeys.length ? (errorsKeys[0] as RegistrationErrorType) : RegistrationErrorType.IsServer;
    if (errorsKey && !REGISTRATION_ERROR_TYPE_LABELS[errorsKey]) {
      console.warn(`Unknown RegistrationErrorType: ${errorsKey}`);
    }

    return REGISTRATION_ERROR_TYPE_LABELS[errorsKey] ?? errorsKey;
  }
}
