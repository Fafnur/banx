import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RegistrationDecisionApiModule } from '@banx/registration/decision/api';

import { RegistrationDecisionEffects } from './registration-decision.effects';
import { RegistrationDecisionFacade } from './registration-decision.facade';
import { reducer, REGISTRATION_DECISION_FEATURE_KEY } from './registration-decision.reducer';

@NgModule({
  imports: [
    RegistrationDecisionApiModule,
    StoreModule.forFeature(REGISTRATION_DECISION_FEATURE_KEY, reducer),
    EffectsModule.forFeature([RegistrationDecisionEffects]),
  ],
  providers: [RegistrationDecisionFacade],
})
export class RegistrationDecisionStateModule {}
