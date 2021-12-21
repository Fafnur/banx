import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FingerprintFacade } from '@banx/fingerprints/state';

import * as RegistrationDataActions from './registration-data.actions';
import * as RegistrationDataSelectors from './registration-data.selectors';

@Injectable()
export class RegistrationDataFacade {
  dataFinishing$ = this.store.pipe(select(RegistrationDataSelectors.selectDataFinishing));

  dataFinishFailure$: Observable<HttpErrorResponse> = this.actions$.pipe(
    ofType(RegistrationDataActions.finishDataFailure),
    map(({ payload }) => payload)
  );

  dataFinishSuccess$: Observable<void> = this.actions$.pipe(
    ofType(RegistrationDataActions.finishDataSuccess),
    map(() => undefined)
  );

  detectFinished$ = this.fingerprintFacade.finished$;

  constructor(private readonly actions$: Actions, private readonly store: Store, private readonly fingerprintFacade: FingerprintFacade) {}

  run(): void {
    this.fingerprintFacade.run();
  }

  finish(): void {
    this.dispatch(RegistrationDataActions.finishData());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
