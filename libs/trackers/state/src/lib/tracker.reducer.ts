import { Action, createReducer, on } from '@ngrx/store';

import * as TrackerActions from './tracker.actions';

export const TRACKER_FEATURE_KEY = 'tracker';

export interface TrackerState {
  saving: boolean;
}

export interface TrackerPartialState {
  readonly [TRACKER_FEATURE_KEY]: TrackerState;
}

export const trackerInitialState: TrackerState = {
  saving: false,
};

const trackerReducer = createReducer(
  trackerInitialState,
  on(TrackerActions.saveRecords, (state) => ({
    ...state,
    saving: true,
  })),
  on(TrackerActions.saveRecordsSuccess, (state) => ({
    ...state,
    saving: false,
  })),
  on(TrackerActions.saveRecordsFailure, (state) => ({
    ...state,
    saving: false,
  }))
);

export function reducer(state: TrackerState | undefined, action: Action): TrackerState {
  return trackerReducer(state, action);
}
