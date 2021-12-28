import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RegistrationDecisionApiModule } from '@banx/registration/decision/api';

import { RegistrationDecisionEffects } from './registration-decision.effects';
import { RegistrationDecisionFacade } from './registration-decision.facade';
import * as fromRegistrationData from './registration-decision.reducer';

@NgModule({
  imports: [
    RegistrationDecisionApiModule,
    StoreModule.forFeature(fromRegistrationData.REGISTRATION_DECISION_FEATURE_KEY, fromRegistrationData.reducer),
    EffectsModule.forFeature([RegistrationDecisionEffects]),
  ],
  providers: [RegistrationDecisionFacade],
})
export class RegistrationDecisionStateModule {}
