import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Action } from '@ngrx/store/src/models';
import { Observable } from 'rxjs';

import { RegistrationStep } from '@banx/registration/process/common';

import * as RegistrationProcessActions from './registration-process.actions';
import { RegistrationProcessPartialState } from './registration-process.reducer';
import * as RegistrationProcessSelectors from './registration-process.selectors';

@Injectable()
export class RegistrationProcessFacade {
  loaded$ = this.store.pipe(select(RegistrationProcessSelectors.selectLoaded));

  selected$ = this.store.pipe(select(RegistrationProcessSelectors.selectSelected));

  processId$ = this.store.pipe(select(RegistrationProcessSelectors.selectProcessId));

  steps$ = this.store.pipe(select(RegistrationProcessSelectors.selectSteps));

  step$ = this.store.pipe(select(RegistrationProcessSelectors.selectSelectedStep));

  finished$ = this.store.pipe(select(RegistrationProcessSelectors.selectFinished));

  /**
   * ???
   */
  selectStepSuccess$: Observable<RegistrationStep> = this.actions.pipe(
    ofType(RegistrationProcessActions.selectStepSuccess, RegistrationProcessActions.selectSubStepSuccess)
  );

  constructor(private readonly actions: Actions, private readonly store: Store<RegistrationProcessPartialState>) {}

  load(): void {
    this.dispatch(RegistrationProcessActions.loadProcess());
  }

  selectSubStep(payload: 'next' | 'prev' = 'next'): void {
    this.dispatch(RegistrationProcessActions.selectSubStep({ payload }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
