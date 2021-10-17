import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FingerprintApiModule } from '@banx/fingerprints/api';

import { FingerprintEffects } from './fingerprint.effects';
import { FingerprintFacade } from './fingerprint.facade';
import { FINGERPRINT_FEATURE_KEY, reducer } from './fingerprint.reducer';

@NgModule({
  imports: [FingerprintApiModule, StoreModule.forFeature(FINGERPRINT_FEATURE_KEY, reducer), EffectsModule.forFeature([FingerprintEffects])],
  providers: [FingerprintFacade],
})
export class FingerprintStateModule {}
