import { NgModule } from '@angular/core';

import { RegistrationFormLayoutModule } from '@banx/registration/form/ui/layout';

import { RegistrationFormPagesRoutingModule } from './registration-form-pages-routing.module';

@NgModule({
  imports: [RegistrationFormPagesRoutingModule, RegistrationFormLayoutModule],
})
export class RegistrationFormPagesModule {}
