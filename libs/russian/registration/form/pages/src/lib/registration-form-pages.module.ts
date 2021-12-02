import { NgModule } from '@angular/core';

import { RegistrationFormStateModule } from '@banx/registration/form/state';
import { RegistrationFormLayoutModule } from '@banx/registration/form/ui/layout';

import { RegistrationFormPagesRoutingModule } from './registration-form-pages-routing.module';

@NgModule({
  imports: [RegistrationFormPagesRoutingModule, RegistrationFormStateModule, RegistrationFormLayoutModule],
})
export class RegistrationFormPagesModule {}
