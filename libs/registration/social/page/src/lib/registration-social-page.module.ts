import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SocialSharedModule } from '@banx/core/social/shared';
import { RegistrationSocialStateModule } from '@banx/registration/social/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { RegistrationStepErrorModule } from '@banx/registration/ui/step-error';
import { ButtonsModule } from '@banx/ui/buttons';
import { SpinnerModule } from '@banx/ui/spinner';

import { RegistrationSocialPageComponent } from './registration-social-page.component';
import { RegistrationSocialPageRoutingModule } from './registration-social-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationSocialPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    RegistrationCardModule,
    RegistrationSocialStateModule,
    ButtonsModule,
    SpinnerModule,
    RegistrationStepErrorModule,
    SocialSharedModule,
  ],
  declarations: [RegistrationSocialPageComponent],
})
export class RegistrationSocialPageModule {}
