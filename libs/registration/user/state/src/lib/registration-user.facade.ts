import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as RegistrationUserActions from './registration-user.actions';
import * as RegistrationUserSelectors from './registration-user.selectors';

@Injectable()
export class RegistrationUserFacade {
  userCreating$ = this.store.pipe(select(RegistrationUserSelectors.selectUserCreating));

  createUserFailure$: Observable<HttpErrorResponse> = this.actions$.pipe(
    ofType(RegistrationUserActions.createUserFailure),
    map(({ payload }) => payload)
  );

  createUserSuccess$: Observable<void> = this.actions$.pipe(
    ofType(RegistrationUserActions.createUserSuccess),
    map(() => undefined)
  );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  finish(): void {
    this.dispatch(RegistrationUserActions.createUser());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
