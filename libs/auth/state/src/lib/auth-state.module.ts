import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthStateEffects } from './auth-state.effects';
import { AuthStateFacade } from './auth-state.facade';
import { AUTH_FEATURE_KEY, reducer } from './auth-state.reducer';

@NgModule({
  imports: [StoreModule.forFeature(AUTH_FEATURE_KEY, reducer), EffectsModule.forFeature([AuthStateEffects])],
  providers: [AuthStateFacade],
})
export class AuthStateModule {}
