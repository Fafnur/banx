import { Action } from '@ngrx/store';

import { createStateMock } from '@banx/core/store/utils';

import * as TrackerActions from './tracker.actions';
import { reducer, trackerInitialState, TrackerState } from './tracker.reducer';

describe('Tracker Reducer', () => {
  const getState = createStateMock(trackerInitialState);
  let state: TrackerState;

  it('saveRecords() should set saving true', () => {
    state = getState();

    const action = TrackerActions.saveRecords();
    const result = reducer(state, action);

    expect(result.saving).toBeTruthy();
  });

  it('should return the previous state', () => {
    const action = {} as Action;

    const result = reducer(trackerInitialState, action);

    expect(result).toBe(trackerInitialState);
  });
});
