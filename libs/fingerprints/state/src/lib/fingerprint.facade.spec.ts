import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { mock } from 'ts-mockito';

import { LoggerService } from '@banx/core/logger/service';
import { providerOf } from '@banx/core/testing';
import { VisitorService } from '@banx/core/visitor/service';
import { FingerprintApiService } from '@banx/fingerprints/api';
import { CanvasDetectorService, FontDetectorService, GeolocationDetectorService } from '@banx/fingerprints/service';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';

import { FingerprintEffects } from './fingerprint.effects';
import { FingerprintFacade } from './fingerprint.facade';
import { FINGERPRINT_FEATURE_KEY, reducer } from './fingerprint.reducer';

describe('FingerprintFacade', () => {
  let facade: FingerprintFacade;
  let fingerprintApiServiceMock: FingerprintApiService;
  let fontDetectorServiceMock: FontDetectorService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;
  let canvasDetectorServiceMock: CanvasDetectorService;
  let geolocationDetectorServiceMock: GeolocationDetectorService;

  beforeEach(() => {
    fingerprintApiServiceMock = mock(FingerprintApiService);
    loggerServiceMock = mock(LoggerService);
    fontDetectorServiceMock = mock(FontDetectorService);
    visitorServiceMock = mock(VisitorService);
    canvasDetectorServiceMock = mock(CanvasDetectorService);
    geolocationDetectorServiceMock = mock(GeolocationDetectorService);
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(FINGERPRINT_FEATURE_KEY, reducer), EffectsModule.forFeature([FingerprintEffects])],
        providers: [
          FingerprintFacade,
          providerOf(FingerprintApiService, fingerprintApiServiceMock),
          providerOf(FontDetectorService, fontDetectorServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(VisitorService, visitorServiceMock),
          providerOf(CanvasDetectorService, canvasDetectorServiceMock),
          providerOf(GeolocationDetectorService, geolocationDetectorServiceMock),
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({ registrationProcess: (s: any) => s } as any, {
            initialState: { registrationProcess: { processId: PROCESS_ID_STUB } },
          }),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      facade = TestBed.inject(FingerprintFacade);
    });

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });
  });
});
