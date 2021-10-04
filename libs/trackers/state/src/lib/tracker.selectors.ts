import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TRACKER_FEATURE_KEY, TrackerState } from './tracker.reducer';

export const selectTrackerState = createFeatureSelector<TrackerState>(TRACKER_FEATURE_KEY);

export const selectSaving = createSelector(selectTrackerState, (state) => state.saving);
