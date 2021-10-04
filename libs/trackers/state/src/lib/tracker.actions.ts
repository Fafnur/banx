import { createAction } from '@ngrx/store';

import { payload } from '@banx/core/store/utils';
import { TrackerEvent } from '@banx/trackers/common';

export const init = createAction('[Tracker] Init');

export const addRecord = createAction('[Tracker] Add Record', payload<TrackerEvent>());

export const saveRecords = createAction('[Tracker] Save Records');

export const saveRecordsSuccess = createAction('[Tracker] Save Records Success');

export const saveRecordsFailure = createAction('[Tracker] Save Records Failure', payload<Record<string, any>>());
