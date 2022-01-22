import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RegistrationConversionApiModule } from '@banx/registration/conversion/api';

import { RegistrationConversionEffects } from './registration-conversion.effects';
import { RegistrationConversionFacade } from './registration-conversion.facade';
import * as fromRegistrationData from './registration-conversion.reducer';

@NgModule({
  imports: [
    RegistrationConversionApiModule,
    StoreModule.forFeature(fromRegistrationData.REGISTRATION_CONVERSION_FEATURE_KEY, fromRegistrationData.reducer),
    EffectsModule.forFeature([RegistrationConversionEffects]),
  ],
  providers: [RegistrationConversionFacade],
})
export class RegistrationConversionStateModule {}
