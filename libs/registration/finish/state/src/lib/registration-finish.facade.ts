import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserStatus } from '@banx/users/common';

import * as RegistrationFinishActions from './registration-finish.actions';
import * as RegistrationFinishSelectors from './registration-finish.selectors';

@Injectable()
export class RegistrationFinishFacade {
  registrationFinishing$ = this.store.pipe(select(RegistrationFinishSelectors.selectRegistrationFinishing));

  finishRegistrationFailure$: Observable<HttpErrorResponse> = this.actions$.pipe(
    ofType(RegistrationFinishActions.finishRegistrationFailure),
    map(({ payload }) => payload)
  );

  finishRegistrationSuccess$: Observable<{ status: UserStatus }> = this.actions$.pipe(
    ofType(RegistrationFinishActions.finishRegistrationSuccess),
    map(({ payload }) => payload)
  );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  finish(): void {
    this.dispatch(RegistrationFinishActions.finishRegistration());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
