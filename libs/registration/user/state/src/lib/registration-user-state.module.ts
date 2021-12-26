import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RegistrationUserApiModule } from '@banx/registration/user/api';

import { RegistrationUserEffects } from './registration-user.effects';
import { RegistrationUserFacade } from './registration-user.facade';
import * as fromRegistrationData from './registration-user.reducer';

@NgModule({
  imports: [
    RegistrationUserApiModule,
    StoreModule.forFeature(fromRegistrationData.REGISTRATION_USER_FEATURE_KEY, fromRegistrationData.reducer),
    EffectsModule.forFeature([RegistrationUserEffects]),
  ],
  providers: [RegistrationUserFacade],
})
export class RegistrationUserStateModule {}
