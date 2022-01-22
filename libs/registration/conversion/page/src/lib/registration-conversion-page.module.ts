import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { RegistrationConversionStateModule } from '@banx/registration/conversion/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { RegistrationStepErrorModule } from '@banx/registration/ui/step-error';
import { SpinnerModule } from '@banx/ui/spinner';

import { RegistrationConversionPageComponent } from './registration-conversion-page.component';
import { RegistrationConversionPageRoutingModule } from './registration-conversion-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationConversionPageRoutingModule,
    MatButtonModule,
    RegistrationCardModule,
    RegistrationConversionStateModule,
    SpinnerModule,
    RegistrationStepErrorModule,
  ],
  declarations: [RegistrationConversionPageComponent],
})
export class RegistrationConversionPageModule {}
