import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';

import * as FingerprintActions from './fingerprint.actions';
import { FingerprintPartialState } from './fingerprint.reducer';
import * as FingerprintSelectors from './fingerprint.selectors';

@Injectable()
export class FingerprintFacade {
  fontsDetecting$ = this.store.pipe(select(FingerprintSelectors.selectFontsDetecting));
  fontsSaving$ = this.store.pipe(select(FingerprintSelectors.selectFontsSaving));

  finished$ = combineLatest([this.actions$.pipe(ofType(FingerprintActions.detectFontsSuccess))]);

  constructor(private readonly actions$: Actions, private readonly store: Store<FingerprintPartialState>) {}

  /**
   * Run all fingerprints
   */
  run(): void {
    this.dispatch(FingerprintActions.detectFonts());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
