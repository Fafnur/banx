import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RegistrationDataStateModule } from '@banx/registration/data/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { RegistrationStepErrorModule } from '@banx/russian/registration/ui/step-error';
import { ButtonsModule } from '@banx/ui/buttons';
import { SpinnerModule } from '@banx/ui/spinner';

import { RegistrationDataPageComponent } from './registration-data-page.component';
import { RegistrationDataPageRoutingModule } from './registration-data-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationDataPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    RegistrationCardModule,
    RegistrationDataStateModule,
    ButtonsModule,
    SpinnerModule,
    RegistrationStepErrorModule,
  ],
  declarations: [RegistrationDataPageComponent],
})
export class RegistrationDataPageModule {}
