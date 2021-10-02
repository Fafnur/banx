import { TrackerEvent, TrackerEventType, TrackerRecord, TrackerRecordsDto } from './tracker.interface';

export const TRACKER_EVENT_STUB: TrackerEvent = {
  type: TrackerEventType.Blur,
  element: 'abc',
};

export const TRACKER_RECORD_STUB: TrackerRecord = {
  type: TRACKER_EVENT_STUB.type,
  element: TRACKER_EVENT_STUB.element,
  uid: '1234',
  time: '2017-12-01T11:40:39.639Z',
  data: {},
  url: '/',
  keys: '',
  value: '',
};

export const TRACKER_RECORDS_STUB: TrackerRecord[] = [TRACKER_RECORD_STUB];

export const TRACKER_RECORDS_DTO_STUB: TrackerRecordsDto = {
  records: TRACKER_RECORDS_STUB,
  visitor: '',
};
