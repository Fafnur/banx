import { NgModule } from '@angular/core';

import { RegistrationFormStateModule } from '@banx/registration/form/state';

import { RegistrationFormPagesRoutingModule } from './registration-form-pages-routing.module';

@NgModule({
  imports: [RegistrationFormPagesRoutingModule, RegistrationFormStateModule],
})
export class RegistrationFormPagesModule {}
