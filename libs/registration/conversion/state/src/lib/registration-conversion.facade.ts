import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RegistrationConversion } from '@banx/registration/conversion/common';

import * as RegistrationConversionActions from './registration-conversion.actions';
import * as RegistrationConversionSelectors from './registration-conversion.selectors';

@Injectable()
export class RegistrationConversionFacade {
  conversionLoading$ = this.store.pipe(select(RegistrationConversionSelectors.selectConversionLoading));
  conversionComplete$ = this.store.pipe(select(RegistrationConversionSelectors.selectConversionComplete));

  loadConversionFailure$: Observable<HttpErrorResponse> = this.actions$.pipe(
    ofType(RegistrationConversionActions.loadConversionFailure),
    map(({ payload }) => payload)
  );

  loadConversionSuccess$: Observable<RegistrationConversion> = this.actions$.pipe(
    ofType(RegistrationConversionActions.loadConversionSuccess),
    map(({ payload }) => payload)
  );

  completeConversionFailure$: Observable<HttpErrorResponse> = this.actions$.pipe(
    ofType(RegistrationConversionActions.completeConversionFailure),
    map(({ payload }) => payload)
  );

  completeConversionSuccess$: Observable<void> = this.actions$.pipe(
    ofType(RegistrationConversionActions.completeConversionSuccess),
    map(() => undefined)
  );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  load(): void {
    this.dispatch(RegistrationConversionActions.loadConversion());
  }

  complete(): void {
    this.dispatch(RegistrationConversionActions.completeConversion());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
