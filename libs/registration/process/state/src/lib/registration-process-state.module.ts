import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RegistrationProcessApiModule } from '@banx/registration/process/api';

import { RegistrationProcessEffects } from './registration-process.effects';
import { RegistrationProcessFacade } from './registration-process.facade';
import { reducer, REGISTRATION_PROCESS_FEATURE_KEY } from './registration-process.reducer';

@NgModule({
  imports: [
    RegistrationProcessApiModule,
    StoreModule.forFeature(REGISTRATION_PROCESS_FEATURE_KEY, reducer),
    EffectsModule.forFeature([RegistrationProcessEffects]),
  ],
  providers: [RegistrationProcessFacade],
})
export class RegistrationProcessStateModule {}
