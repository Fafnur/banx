import { NgModule } from '@angular/core';

import { RegistrationFormErrorPipe } from './registration-form-error.pipe';

@NgModule({
  declarations: [RegistrationFormErrorPipe],
  exports: [RegistrationFormErrorPipe],
})
export class RegistrationFormErrorsModule {}
