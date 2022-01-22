import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RegistrationSocialApiModule } from '@banx/registration/social/api';

import { RegistrationSocialEffects } from './registration-social.effects';
import { RegistrationSocialFacade } from './registration-social.facade';
import * as fromRegistrationData from './registration-social.reducer';

@NgModule({
  imports: [
    RegistrationSocialApiModule,
    StoreModule.forFeature(fromRegistrationData.REGISTRATION_SOCIAL_FEATURE_KEY, fromRegistrationData.reducer),
    EffectsModule.forFeature([RegistrationSocialEffects]),
  ],
  providers: [RegistrationSocialFacade],
})
export class RegistrationSocialStateModule {}
