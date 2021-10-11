import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { mock } from 'ts-mockito';

import { LoggerService } from '@banx/core/logger/service';
import { providerOf } from '@banx/core/testing';
import { VisitorService } from '@banx/core/visitor/service';
import { FingerprintApiService } from '@banx/fingerprints/api';
import { FontDetectorService } from '@banx/fingerprints/service';

import { FingerprintEffects } from './fingerprint.effects';
import { FingerprintFacade } from './fingerprint.facade';
import { FINGERPRINT_FEATURE_KEY, reducer } from './fingerprint.reducer';

describe('FingerprintFacade', () => {
  let facade: FingerprintFacade;
  let fingerprintApiServiceMock: FingerprintApiService;
  let fontDetectorServiceMock: FontDetectorService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;

  beforeEach(() => {
    fingerprintApiServiceMock = mock(FingerprintApiService);
    loggerServiceMock = mock(LoggerService);
    fontDetectorServiceMock = mock(FontDetectorService);
    visitorServiceMock = mock(VisitorService);
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
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      facade = TestBed.inject(FingerprintFacade);
    });

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });

    // it('run() should return call finished', async () => {
    //   when(fontDetectorServiceMock.detect()).thenReturn(of(FINGERPRINT_FONTS_DETECTED_STUB));
    //   when(fingerprintApiServiceMock.saveFonts(deepEqual(FINGERPRINT_DTO_STUB))).thenReturn(of(undefined));
    //
    //   facade.run();
    //
    //   const finished = await readFirst(facade.finished$);
    //
    //   expect(finished?.length).toBe(1);
    // });
  });
});
