import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as RegistrationDecisionActions from './registration-decision.actions';
import * as RegistrationDecisionSelectors from './registration-decision.selectors';

@Injectable()
export class RegistrationDecisionFacade {
  decisionMaking$ = this.store.pipe(select(RegistrationDecisionSelectors.selectDecisionMaking));

  makeDecisionFailure$: Observable<HttpErrorResponse> = this.actions$.pipe(
    ofType(RegistrationDecisionActions.makeDecisionFailure),
    map(({ payload }) => payload)
  );

  makeDecisionSuccess$: Observable<void> = this.actions$.pipe(
    ofType(RegistrationDecisionActions.makeDecisionSuccess),
    map(() => undefined)
  );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  makeDecision(): void {
    this.dispatch(RegistrationDecisionActions.makeDecision());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
