import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { RegistrationDecisionStateModule } from '@banx/registration/decision/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { RegistrationStepErrorModule } from '@banx/registration/ui/step-error';
import { SpinnerModule } from '@banx/ui/spinner';

import { RegistrationDecisionPageComponent } from './registration-decision-page.component';
import { RegistrationDecisionPageRoutingModule } from './registration-decision-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationDecisionPageRoutingModule,
    MatButtonModule,
    RegistrationCardModule,
    RegistrationDecisionStateModule,
    SpinnerModule,
    RegistrationStepErrorModule,
  ],
  declarations: [RegistrationDecisionPageComponent],
})
export class RegistrationDecisionPageModule {}
