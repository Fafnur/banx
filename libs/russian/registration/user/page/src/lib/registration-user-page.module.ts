import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RegistrationCardModule } from '@banx/registration/ui/card';
import { RegistrationUserStateModule } from '@banx/registration/user/state';
import { RegistrationStepErrorModule } from '@banx/russian/registration/ui/step-error';
import { SpinnerModule } from '@banx/ui/spinner';

import { RegistrationUserPageComponent } from './registration-user-page.component';
import { RegistrationUserPageRoutingModule } from './registration-user-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationUserPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    RegistrationCardModule,
    RegistrationUserStateModule,
    SpinnerModule,
    RegistrationStepErrorModule,
  ],
  declarations: [RegistrationUserPageComponent],
})
export class RegistrationUserPageModule {}
