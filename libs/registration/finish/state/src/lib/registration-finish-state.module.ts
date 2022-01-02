import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RegistrationFinishApiModule } from '@banx/registration/finish/api';

import { RegistrationFinishEffects } from './registration-finish.effects';
import { RegistrationFinishFacade } from './registration-finish.facade';
import { reducer, REGISTRATION_FINISH_FEATURE_KEY } from './registration-finish.reducer';

@NgModule({
  imports: [
    RegistrationFinishApiModule,
    StoreModule.forFeature(REGISTRATION_FINISH_FEATURE_KEY, reducer),
    EffectsModule.forFeature([RegistrationFinishEffects]),
  ],
  providers: [RegistrationFinishFacade],
})
export class RegistrationFinishStateModule {}
