import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { LoggerService } from '@banx/core/logger/service';
import { PlatformService } from '@banx/core/platform/service';
import { VisitorService } from '@banx/core/visitor/service';
import { FingerprintApiService } from '@banx/fingerprints/api';
import { FontDetectorService } from '@banx/fingerprints/service';

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

  constructor(
    private readonly actions$: Actions,
    private readonly platformService: PlatformService,
    private readonly loggerService: LoggerService,
    private readonly fontDetectorService: FontDetectorService,
    private readonly fingerprintApiService: FingerprintApiService,
    private readonly visitorService: VisitorService
  ) {}
}
