import { NgModule } from '@angular/core';

import { FingerprintStateModule } from '@banx/fingerprints/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';

import { RegistrationDataPageComponent } from './registration-data-page.component';
import { RegistrationDataPageRoutingModule } from './registration-data-page-routing.module';

@NgModule({
  imports: [RegistrationDataPageRoutingModule, RegistrationCardModule, FingerprintStateModule],
  declarations: [RegistrationDataPageComponent],
})
export class RegistrationDataPageModule {}
