import { createStoreMock } from '@banx/core/store/utils';

import { TRACKER_FEATURE_KEY, trackerInitialState, TrackerPartialState, TrackerState } from './tracker.reducer';
import * as TrackerSelectors from './tracker.selectors';

describe('Tracker Selectors', () => {
  const getStore = createStoreMock<TrackerState, TrackerPartialState>(TRACKER_FEATURE_KEY, trackerInitialState);
  let store: TrackerPartialState;

  it('selectSaving() should return saving', () => {
    store = getStore({ saving: true });
    const result = TrackerSelectors.selectSaving(store);

    expect(result).toBeTruthy();
  });
});
