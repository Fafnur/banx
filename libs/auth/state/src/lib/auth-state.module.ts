import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthApiModule } from '@banx/auth/api';

import { AuthStateEffects } from './auth-state.effects';
import { AuthFacade } from './auth-state.facade';
import { AUTH_FEATURE_KEY, reducer } from './auth-state.reducer';

@NgModule({
  imports: [AuthApiModule, StoreModule.forFeature(AUTH_FEATURE_KEY, reducer), EffectsModule.forFeature([AuthStateEffects])],
  providers: [AuthFacade],
})
export class AuthStateModule {}
