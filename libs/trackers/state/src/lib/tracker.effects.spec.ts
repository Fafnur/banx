import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of, ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { API_ERROR_RESPONSE_STUB } from '@banx/core/api/service';
import { LoggerService } from '@banx/core/logger/service';
import { LocalAsyncStorage } from '@banx/core/storage/local';
import { providerOf } from '@banx/core/testing';
import { VisitorService } from '@banx/core/visitor/service';
import { TrackerApiService } from '@banx/trackers/api';
import { TRACKER_EVENT_STUB, TRACKER_RECORDS_DTO_STUB, TRACKER_RECORDS_STUB, TrackerRecord } from '@banx/trackers/common';
import { TrackerService } from '@banx/trackers/service';

import * as TrackerActions from './tracker.actions';
import { TrackerEffects } from './tracker.effects';

describe('TrackerEffects', () => {
  let actions$: Observable<Action>;
  let effects: TrackerEffects;
  let trackerApiServiceMock: TrackerApiService;
  let trackerServiceMock: TrackerService;
  let loggerServiceMock: LoggerService;
  let localAsyncStorageMock: LocalAsyncStorage;
  let visitorServiceMock: VisitorService;
  let recordAdded$: ReplaySubject<TrackerRecord>;
  let storeMock: Store;

  beforeEach(() => {
    trackerApiServiceMock = mock(TrackerApiService);
    loggerServiceMock = mock(LoggerService);
    trackerServiceMock = mock(TrackerService);
    localAsyncStorageMock = mock(LocalAsyncStorage);
    visitorServiceMock = mock(VisitorService);
    storeMock = mock(Store);

    recordAdded$ = new ReplaySubject<TrackerRecord>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [NxModule.forRoot()],
        providers: [
          TrackerEffects,
          provideMockActions(() => actions$),
          providerOf(Store, storeMock),
          providerOf(TrackerApiService, trackerApiServiceMock),
          providerOf(TrackerService, trackerServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(LocalAsyncStorage, localAsyncStorageMock),
          providerOf(VisitorService, visitorServiceMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(visitorServiceMock.getUuid()).thenReturn('');
    when(trackerServiceMock.recordAdded$).thenReturn(recordAdded$);

    effects = TestBed.inject(TrackerEffects);
  });

  describe('init$', () => {
    it('should return restore', () => {
      const action = TrackerActions.init();
      const completion = TrackerActions.saveRecords();

      actions$ = hot('-a-|', { a: action });

      const expected = hot('-a-|', { a: completion });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('saveRecords$', () => {
    it('should return saveRecordsSuccess', () => {
      const action = TrackerActions.saveRecords();
      const completion = TrackerActions.saveRecordsSuccess();

      actions$ = hot('-a-|', { a: action });
      const response = cold('-a-|', { a: null });
      const expected = cold('--a-|', { a: completion });
      when(trackerServiceMock.getRecords()).thenReturn(TRACKER_RECORDS_STUB);
      when(trackerApiServiceMock.save(deepEqual(TRACKER_RECORDS_DTO_STUB))).thenReturn(response);

      expect(effects.saveRecords$).toBeObservable(expected);

      verify(trackerServiceMock.removeRecords(deepEqual(TRACKER_RECORDS_STUB))).once();
    });

    it('should return saveRecordsFailure', () => {
      const action = TrackerActions.saveRecords();
      const completion = TrackerActions.saveRecordsFailure({ payload: API_ERROR_RESPONSE_STUB });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-#|', {}, API_ERROR_RESPONSE_STUB);
      const expected = cold('--a|', { a: completion });
      when(trackerServiceMock.getRecords()).thenReturn(TRACKER_RECORDS_STUB);
      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(trackerApiServiceMock.save(deepEqual(TRACKER_RECORDS_DTO_STUB))).thenReturn(response);

      expect(effects.saveRecords$).toBeObservable(expected);

      verify(trackerServiceMock.unmarkRecords(deepEqual(TRACKER_RECORDS_STUB))).once();
    });
  });

  describe('addRecord$', () => {
    it('should return call tracker add', () => {
      const action = TrackerActions.addRecord({ payload: TRACKER_EVENT_STUB });

      actions$ = hot('-a-|', { a: action });
      const expected = hot('---|');

      expect(effects.addRecord$).toBeObservable(expected);

      verify(trackerServiceMock.add(deepEqual(TRACKER_EVENT_STUB))).once();
    });
  });

  // describe('routerNavigated$', () => {
  //   it('should return call tracker add', () => {
  //     const action = { type: '@ngrx/router-store/navigated', payload: { event: { url: '/site' } } };
  //     const payload = { element: 'router', type: TrackerEventType.Navigate, value: '/site' };
  //
  //     actions$ = hot('-a-|', { a: action });
  //     const expected = hot('---|');
  //
  //     expect(effects.addRecord$).toBeObservable(expected);
  //
  //     verify(trackerServiceMock.add(anything())).once();
  //   });
  // });
});
