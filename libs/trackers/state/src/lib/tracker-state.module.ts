import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TrackerApiModule } from '@banx/trackers/api';

import { TrackerEffects } from './tracker.effects';
import { TrackerFacade } from './tracker.facade';
import { reducer, TRACKER_FEATURE_KEY } from './tracker.reducer';

@NgModule({
  imports: [TrackerApiModule, StoreModule.forFeature(TRACKER_FEATURE_KEY, reducer), EffectsModule.forFeature([TrackerEffects])],
  providers: [TrackerFacade],
})
export class TrackerStateModule {}
