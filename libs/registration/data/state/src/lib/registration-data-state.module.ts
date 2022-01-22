import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FingerprintStateModule } from '@banx/fingerprints/state';
import { RegistrationDataApiModule } from '@banx/registration/data/api';

import { RegistrationDataEffects } from './registration-data.effects';
import { RegistrationDataFacade } from './registration-data.facade';
import * as fromRegistrationData from './registration-data.reducer';

@NgModule({
  imports: [
    RegistrationDataApiModule,
    FingerprintStateModule,
    StoreModule.forFeature(fromRegistrationData.REGISTRATION_DATA_FEATURE_KEY, fromRegistrationData.reducer),
    EffectsModule.forFeature([RegistrationDataEffects]),
  ],
  providers: [RegistrationDataFacade],
})
export class RegistrationDataStateModule {}
