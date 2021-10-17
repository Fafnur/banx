import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { LoggerService } from '@banx/core/logger/service';
import { PlatformService } from '@banx/core/platform/service';
import { VisitorService } from '@banx/core/visitor/service';
import { FingerprintApiService } from '@banx/fingerprints/api';
import { CanvasFingerprint } from '@banx/fingerprints/common';
import { CanvasDetectorService, FontDetectorService, GeolocationDetectorService } from '@banx/fingerprints/service';

import * as FingerprintActions from './fingerprint.actions';

@Injectable()
export class FingerprintEffects {
  detectFonts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FingerprintActions.detectFonts),
      fetch({
        id: () => 'fingerprint-detect-fonts',
        run: () =>
          this.platformService.isBrowser
            ? this.fontDetectorService.detect().pipe(map((payload) => FingerprintActions.detectFontsSuccess({ payload })))
            : FingerprintActions.detectFontsSuccess({ payload: {} }),
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, FingerprintActions.detectFontsFailure({ payload: error })),
      })
    )
  );

  detectFontsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FingerprintActions.detectFontsSuccess),
      fetch({
        id: () => 'fingerprint-detect-fonts-success',
        run: (action) => (Object.keys(action.payload).length ? FingerprintActions.saveFonts({ payload: action.payload }) : undefined),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  saveFonts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FingerprintActions.saveFonts),
      fetch({
        id: () => 'fingerprint-save-fonts',
        run: (action) =>
          this.platformService.isBrowser
            ? this.fingerprintApiService
                .saveFonts({
                  visitor: this.visitorService.getUuid(),
                  data: action.payload,
                })
                .pipe(map(() => FingerprintActions.saveFontsSuccess()))
            : FingerprintActions.saveFontsSuccess(),
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, FingerprintActions.saveFontsFailure({ payload: error })),
      })
    )
  );

  detectCanvas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FingerprintActions.detectCanvas),
      fetch({
        id: () => 'fingerprint-detect-canvas',
        run: () =>
          this.platformService.isBrowser
            ? FingerprintActions.detectCanvasSuccess({ payload: this.canvasDetectorService.detect() })
            : FingerprintActions.detectCanvasSuccess({ payload: { winding: false, geometry: '', text: '' } }),
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, FingerprintActions.detectCanvasFailure({ payload: error })),
      })
    )
  );

  detectCanvasSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FingerprintActions.detectCanvasSuccess, FingerprintActions.detectCanvasFailure),
      fetch({
        id: () => 'fingerprint-detect-canvas-success-or-failure',
        run: (action) =>
          FingerprintActions.saveCanvas({
            payload: 'winding' in action.payload ? (action.payload as CanvasFingerprint) : { winding: false, geometry: '', text: '' },
          }),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  saveCanvas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FingerprintActions.saveCanvas),
      fetch({
        id: () => 'fingerprint-save-canvas',
        run: (action) =>
          this.platformService.isBrowser
            ? this.fingerprintApiService
                .saveCanvas({
                  visitor: this.visitorService.getUuid(),
                  data: action.payload,
                })
                .pipe(map(() => FingerprintActions.saveCanvasSuccess()))
            : FingerprintActions.saveCanvasSuccess(),
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, FingerprintActions.saveCanvasFailure({ payload: error })),
      })
    )
  );

  detectGeolocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FingerprintActions.detectGeolocation),
      fetch({
        id: () => 'fingerprint-detect-geolocation',
        run: () =>
          this.platformService.isBrowser
            ? this.geolocationDetectorService.detect().pipe(map((payload) => FingerprintActions.detectGeolocationSuccess({ payload })))
            : FingerprintActions.detectGeolocationSuccess({ payload: null }),
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, FingerprintActions.detectGeolocationFailure({ payload: error })),
      })
    )
  );

  detectGeolocationSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FingerprintActions.detectGeolocationSuccess, FingerprintActions.detectGeolocationFailure),
      fetch({
        id: () => 'fingerprint-detect-geolocation-success-or-failure',
        run: (action) =>
          FingerprintActions.saveGeolocation({
            payload: action.payload?.latitude && action.payload?.longitude ? (action.payload as GeolocationCoordinates) : null,
          }),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  saveGeolocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FingerprintActions.saveGeolocation),
      fetch({
        id: () => 'fingerprint-save-geolocation',
        run: (action) =>
          this.platformService.isBrowser
            ? this.fingerprintApiService
                .saveGeolocation({
                  visitor: this.visitorService.getUuid(),
                  data: action.payload,
                })
                .pipe(map(() => FingerprintActions.saveGeolocationSuccess()))
            : FingerprintActions.saveGeolocationSuccess(),
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, FingerprintActions.saveGeolocationFailure({ payload: error })),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly platformService: PlatformService,
    private readonly loggerService: LoggerService,
    private readonly fontDetectorService: FontDetectorService,
    private readonly canvasDetectorService: CanvasDetectorService,
    private readonly geolocationDetectorService: GeolocationDetectorService,
    private readonly fingerprintApiService: FingerprintApiService,
    private readonly visitorService: VisitorService
  ) {}
}
