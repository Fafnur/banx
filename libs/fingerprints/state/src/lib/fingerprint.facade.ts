import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';

import * as FingerprintActions from './fingerprint.actions';
import { FingerprintPartialState } from './fingerprint.reducer';

@Injectable()
export class FingerprintFacade {
  finished$ = combineLatest([
    this.actions$.pipe(ofType(FingerprintActions.detectFontsSuccess)),
    this.actions$.pipe(ofType(FingerprintActions.detectCanvasSuccess)),
    this.actions$.pipe(ofType(FingerprintActions.detectGeolocationSuccess)),
  ]);

  constructor(private readonly actions$: Actions, private readonly store: Store<FingerprintPartialState>) {}

  /**
   * Run all fingerprints
   */
  run(): void {
    this.dispatch(FingerprintActions.detectFonts());
    this.dispatch(FingerprintActions.detectCanvas());
    this.dispatch(FingerprintActions.detectGeolocation());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
