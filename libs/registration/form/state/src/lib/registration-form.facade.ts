import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { RegistrationForm, RegistrationFormFieldValidate, RegistrationFormValidate } from '@banx/registration/form/common';

import * as RegistrationFormActions from './registration-form.actions';
import { RegistrationFormPartialState } from './registration-form.reducer';
import * as RegistrationFormSelectors from './registration-form.selectors';

@Injectable()
export class RegistrationFormFacade {
  form$ = this.store.pipe(select(RegistrationFormSelectors.selectForm));
  formLoaded$ = this.store.pipe(select(RegistrationFormSelectors.selectFormLoaded));
  formLoading$ = this.store.pipe(select(RegistrationFormSelectors.selectFormLoading));
  formCreating$ = this.store.pipe(select(RegistrationFormSelectors.selectFormCreating));
  formValidating$ = this.store.pipe(select(RegistrationFormSelectors.selectFormValidating));

  loadFormSuccess$: Observable<RegistrationForm> = this.actions$.pipe(
    ofType(RegistrationFormActions.loadFormSuccess),
    map(({ payload }) => payload)
  );

  loadFormFailure$: Observable<Record<string, any>> = this.actions$.pipe(
    ofType(RegistrationFormActions.loadFormFailure),
    map(({ payload }) => payload)
  );

  createFormSuccess$: Observable<void> = this.actions$.pipe(
    ofType(RegistrationFormActions.createFormSuccess),
    map(() => undefined)
  );

  createFormFailure$: Observable<HttpErrorResponse> = this.actions$.pipe(
    ofType(RegistrationFormActions.createFormFailure),
    map(({ payload }) => payload)
  );

  validateFormSuccess$: Observable<void> = this.actions$.pipe(
    ofType(RegistrationFormActions.validateFormSuccess),
    map(() => undefined)
  );

  validateFormFailure$: Observable<HttpErrorResponse> = this.actions$.pipe(
    ofType(RegistrationFormActions.validateFormFailure),
    map(({ payload }) => payload)
  );

  validateFormFieldSuccess$ = (field: string): Observable<void> =>
    this.actions$.pipe(
      ofType(RegistrationFormActions.validateFormFieldSuccess),
      filter((action) => action.payload === field),
      map(() => undefined)
    );

  validateFormFieldFailure$ = (field: string): Observable<HttpErrorResponse> =>
    this.actions$.pipe(
      ofType(RegistrationFormActions.validateFormFieldFailure),
      filter((action) => action.payload.field === field),
      map(({ payload }) => payload.response)
    );

  constructor(private readonly actions$: Actions, private readonly store: Store<RegistrationFormPartialState>) {}

  load(): void {
    this.dispatch(RegistrationFormActions.loadForm());
  }

  create(): void {
    this.dispatch(RegistrationFormActions.createForm());
  }

  validate(payload: RegistrationFormValidate): void {
    this.dispatch(RegistrationFormActions.validateForm({ payload }));
  }

  validateUnique(payload: RegistrationFormFieldValidate): void {
    this.dispatch(RegistrationFormActions.validateFormField({ payload }));
  }

  updateForm(payload: RegistrationForm): void {
    this.dispatch(RegistrationFormActions.updateForm({ payload }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
