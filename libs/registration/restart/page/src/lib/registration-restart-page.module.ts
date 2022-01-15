import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { RegistrationCardModule } from '@banx/registration/ui/card';

import { RegistrationRestartPageComponent } from './registration-restart-page.component';
import { RegistrationRestartPageRoutingModule } from './registration-restart-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRestartPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    RegistrationCardModule,
    NavigationSharedModule,
  ],
  declarations: [RegistrationRestartPageComponent],
})
export class RegistrationRestartPageModule {}
