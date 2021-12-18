import { Injectable, PipeTransform } from '@nestjs/common';

import { RegistrationForm, RegistrationFormCreate } from '@banx/registration/form/common';

@Injectable()
export class RegistrationCreateConverterPipe implements PipeTransform {
  transform(body: RegistrationFormCreate): RegistrationForm {
    return body.form;
  }
}
