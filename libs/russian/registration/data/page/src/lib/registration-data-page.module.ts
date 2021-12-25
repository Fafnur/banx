import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RegistrationDataStateModule } from '@banx/registration/data/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';

import { RegistrationDataPageComponent } from './registration-data-page.component';
import { RegistrationDataPageRoutingModule } from './registration-data-page-routing.module';

@NgModule({
  imports: [RegistrationDataPageRoutingModule, MatIconModule, MatButtonModule, RegistrationCardModule, RegistrationDataStateModule],
  declarations: [RegistrationDataPageComponent],
})
export class RegistrationDataPageModule {}
