import { NgModule } from '@angular/core';

import { RegistrationProcessStateModule } from '@banx/registration/process/state';

import { RegistrationPagesRoutingModule } from './registration-pages-routing.module';

@NgModule({
  imports: [RegistrationPagesRoutingModule, RegistrationProcessStateModule],
})
export class RegistrationPagesModule {}
