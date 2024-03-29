import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { deepEqual, mock, verify, when } from 'ts-mockito';

import { LoggerService } from '@banx/core/logger/service';
import { LocalAsyncStorage } from '@banx/core/storage/local';
import { providerOf } from '@banx/core/testing';
import { VisitorService } from '@banx/core/visitor/service';
import { TrackerApiService } from '@banx/trackers/api';
import { TRACKER_EVENT_STUB, TrackerRecord } from '@banx/trackers/common';
import { TrackerService } from '@banx/trackers/service';

import { TrackerEffects } from './tracker.effects';
import { TrackerFacade } from './tracker.facade';
import { reducer, TRACKER_FEATURE_KEY } from './tracker.reducer';

describe('TrackerFacade', () => {
  let facade: TrackerFacade;
  let trackerApiServiceMock: TrackerApiService;
  let trackerServiceMock: TrackerService;
  let loggerServiceMock: LoggerService;
  let localAsyncStorageMock: LocalAsyncStorage;
  let visitorServiceMock: VisitorService;
  let recordAdded$: ReplaySubject<TrackerRecord>;

  describe('used in NgModule', () => {
    beforeEach(() => {
      trackerApiServiceMock = mock(TrackerApiService);
      loggerServiceMock = mock(LoggerService);
      trackerServiceMock = mock(TrackerService);
      localAsyncStorageMock = mock(LocalAsyncStorage);
      visitorServiceMock = mock(VisitorService);

      recordAdded$ = new ReplaySubject<TrackerRecord>(1);
    });

    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(TRACKER_FEATURE_KEY, reducer), EffectsModule.forFeature([TrackerEffects])],
        providers: [
          TrackerFacade,
          providerOf(TrackerApiService, trackerApiServiceMock),
          providerOf(TrackerService, trackerServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(LocalAsyncStorage, localAsyncStorageMock),
          providerOf(VisitorService, visitorServiceMock),
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      when(trackerServiceMock.recordAdded$).thenReturn(recordAdded$);

      facade = TestBed.inject(TrackerFacade);
    });

    it('add() should add', async () => {
      facade.add(TRACKER_EVENT_STUB);

      verify(trackerServiceMock.add(deepEqual(TRACKER_EVENT_STUB))).once();
    });
  });
});
