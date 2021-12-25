import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as RegistrationSocialActions from './registration-social.actions';
import * as RegistrationSocialSelectors from './registration-social.selectors';

@Injectable()
export class RegistrationSocialFacade {
  socialFinishing$ = this.store.pipe(select(RegistrationSocialSelectors.selectSocialFinishing));

  finishSocialFailure$: Observable<HttpErrorResponse> = this.actions$.pipe(
    ofType(RegistrationSocialActions.finishSocialFailure),
    map(({ payload }) => payload)
  );

  finishSocialSuccess$: Observable<void> = this.actions$.pipe(
    ofType(RegistrationSocialActions.finishSocialSuccess),
    map(() => undefined)
  );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  finish(): void {
    this.dispatch(RegistrationSocialActions.finishSocial());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
