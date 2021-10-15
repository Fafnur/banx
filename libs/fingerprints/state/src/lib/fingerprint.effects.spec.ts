import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { cold, hot } from '@nrwl/angular/testing';
import { Observable, of } from 'rxjs';
import { anything, deepEqual, mock, when } from 'ts-mockito';

import { API_ERROR_RESPONSE_STUB } from '@banx/core/api/service';
import { LoggerService } from '@banx/core/logger/service';
import { providerOf } from '@banx/core/testing';
import { VisitorService } from '@banx/core/visitor/service';
import { FingerprintApiService } from '@banx/fingerprints/api';
import {
  CANVAS_FINGERPRINT_DTO_STUB,
  CANVAS_FINGERPRINT_STUB,
  FONTS_FINGERPRINT_DTO_STUB,
  FONTS_FINGERPRINT_STUB,
} from '@banx/fingerprints/common';
import { CanvasDetectorService, FontDetectorService } from '@banx/fingerprints/service';

import * as FingerprintActions from './fingerprint.actions';
import { FingerprintEffects } from './fingerprint.effects';

describe('FingerprintEffects', () => {
  let actions$: Observable<Action>;
  let effects: FingerprintEffects;
  let fingerprintApiServiceMock: FingerprintApiService;
  let fontDetectorServiceMock: FontDetectorService;
  let canvasDetectorServiceMock: CanvasDetectorService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;

  beforeEach(() => {
    fingerprintApiServiceMock = mock(FingerprintApiService);
    loggerServiceMock = mock(LoggerService);
    fontDetectorServiceMock = mock(FontDetectorService);
    visitorServiceMock = mock(VisitorService);
    canvasDetectorServiceMock = mock(CanvasDetectorService);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [NxModule.forRoot()],
        providers: [
          FingerprintEffects,
          provideMockActions(() => actions$),
          provideMockStore(),
          providerOf(FingerprintApiService, fingerprintApiServiceMock),
          providerOf(FontDetectorService, fontDetectorServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(VisitorService, visitorServiceMock),
          providerOf(CanvasDetectorService, canvasDetectorServiceMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(visitorServiceMock.getUuid()).thenReturn('123456');

    effects = TestBed.inject(FingerprintEffects);
  });

  describe('detectFonts$', () => {
    it('should return detectFontsSuccess', () => {
      const action = FingerprintActions.detectFonts();
      const completion = FingerprintActions.detectFontsSuccess({ payload: FONTS_FINGERPRINT_STUB });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-a-|', { a: FONTS_FINGERPRINT_STUB });
      const expected = cold('--a-|', { a: completion });

      when(fontDetectorServiceMock.detect()).thenReturn(response);

      expect(effects.detectFonts$).toBeObservable(expected);
    });

    it('should return detectFontsFailure', () => {
      const action = FingerprintActions.detectFonts();
      const completion = FingerprintActions.detectFontsFailure({ payload: API_ERROR_RESPONSE_STUB });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-#|', {}, API_ERROR_RESPONSE_STUB);
      const expected = cold('--a|', { a: completion });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(fontDetectorServiceMock.detect()).thenReturn(response);

      expect(effects.detectFonts$).toBeObservable(expected);
    });
  });

  describe('detectFontsSuccess$', () => {
    it('should return saveFonts', () => {
      const payload = { payload: FONTS_FINGERPRINT_STUB };

      actions$ = hot('-a-|', { a: FingerprintActions.detectFontsSuccess(payload) });
      const expected = hot('-a-|', { a: FingerprintActions.saveFonts(payload) });

      expect(effects.detectFontsSuccess$).toBeObservable(expected);
    });
  });

  describe('saveFonts$', () => {
    it('should return saveFontsSuccess', () => {
      const action = FingerprintActions.saveFonts({ payload: FONTS_FINGERPRINT_STUB });
      const completion = FingerprintActions.saveFontsSuccess();

      actions$ = hot('-a-|', { a: action });
      const response = cold('-a-|', { a: null });
      const expected = cold('--a-|', { a: completion });

      when(fingerprintApiServiceMock.saveFonts(deepEqual(FONTS_FINGERPRINT_DTO_STUB))).thenReturn(response);

      expect(effects.saveFonts$).toBeObservable(expected);
    });

    it('should return saveFontsFailure', () => {
      const action = FingerprintActions.saveFonts({ payload: FONTS_FINGERPRINT_STUB });
      const completion = FingerprintActions.saveFontsFailure({ payload: API_ERROR_RESPONSE_STUB });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-#|', {}, API_ERROR_RESPONSE_STUB);
      const expected = cold('--a|', { a: completion });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(fingerprintApiServiceMock.saveFonts(deepEqual(FONTS_FINGERPRINT_DTO_STUB))).thenReturn(response);

      expect(effects.saveFonts$).toBeObservable(expected);
    });
  });

  describe('detectCanvas$', () => {
    it('should return detectCanvasSuccess', () => {
      const action = FingerprintActions.detectCanvas();
      const completion = FingerprintActions.detectCanvasSuccess({ payload: CANVAS_FINGERPRINT_STUB });

      actions$ = hot('-a-|', { a: action });
      const expected = cold('-a-|', { a: completion });

      when(canvasDetectorServiceMock.detect()).thenReturn(CANVAS_FINGERPRINT_STUB);

      expect(effects.detectCanvas$).toBeObservable(expected);
    });
  });

  describe('detectCanvasSuccess$', () => {
    it('should return saveCanvas', () => {
      const payload = { payload: CANVAS_FINGERPRINT_STUB };

      actions$ = hot('-a-|', { a: FingerprintActions.detectCanvasSuccess(payload) });
      const expected = hot('-a-|', { a: FingerprintActions.saveCanvas(payload) });

      expect(effects.detectCanvasSuccess$).toBeObservable(expected);
    });
  });

  describe('saveCanvas$', () => {
    it('should return saveCanvasSuccess', () => {
      const action = FingerprintActions.saveCanvas({ payload: CANVAS_FINGERPRINT_STUB });
      const completion = FingerprintActions.saveCanvasSuccess();

      actions$ = hot('-a-|', { a: action });
      const response = cold('-a-|', { a: null });
      const expected = cold('--a-|', { a: completion });

      when(fingerprintApiServiceMock.saveCanvas(deepEqual(CANVAS_FINGERPRINT_DTO_STUB))).thenReturn(response);

      expect(effects.saveCanvas$).toBeObservable(expected);
    });

    it('should return saveCanvasFailure', () => {
      const action = FingerprintActions.saveCanvas({ payload: CANVAS_FINGERPRINT_STUB });
      const completion = FingerprintActions.saveCanvasFailure({ payload: API_ERROR_RESPONSE_STUB });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-#|', {}, API_ERROR_RESPONSE_STUB);
      const expected = cold('--a|', { a: completion });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(fingerprintApiServiceMock.saveCanvas(deepEqual(CANVAS_FINGERPRINT_DTO_STUB))).thenReturn(response);

      expect(effects.saveCanvas$).toBeObservable(expected);
    });
  });
});
