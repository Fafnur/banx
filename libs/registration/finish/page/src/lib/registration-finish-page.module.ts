import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { RegistrationFinishStateModule } from '@banx/registration/finish/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { RegistrationStepErrorModule } from '@banx/registration/ui/step-error';
import { SpinnerModule } from '@banx/ui/spinner';

import { RegistrationFinishPageComponent } from './registration-finish-page.component';
import { RegistrationFinishPageRoutingModule } from './registration-finish-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationFinishPageRoutingModule,
    MatButtonModule,
    RegistrationCardModule,
    RegistrationFinishStateModule,
    SpinnerModule,
    RegistrationStepErrorModule,
  ],
  declarations: [RegistrationFinishPageComponent],
})
export class RegistrationFinishPageModule {}
