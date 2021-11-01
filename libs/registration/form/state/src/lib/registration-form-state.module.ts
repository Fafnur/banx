import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RegistrationFormApiModule } from '@banx/registration/form/api';

import { RegistrationFormEffects } from './registration-form.effects';
import { RegistrationFormFacade } from './registration-form.facade';
import { reducer, REGISTRATION_FORM_FEATURE_KEY } from './registration-form.reducer';

@NgModule({
  imports: [
    RegistrationFormApiModule,
    StoreModule.forFeature(REGISTRATION_FORM_FEATURE_KEY, reducer),
    EffectsModule.forFeature([RegistrationFormEffects]),
  ],
  providers: [RegistrationFormFacade],
})
export class RegistrationFormStateModule {}
