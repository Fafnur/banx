import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { FormErrorsService } from '@banx/core/forms/errors';
import { providerOf } from '@banx/core/testing';
import { RegistrationFormFacade } from '@banx/registration/form/state';
import { RegistrationProcessFacade } from '@banx/registration/process/state';
import { ButtonsModule } from '@banx/ui/buttons';

import { RegistrationFormCardComponent } from './registration-form-card.component';

@Component({
  template: `<banx-registration-form-card automation-id="card" [form]="form"></banx-registration-form-card>`,
})
class WrapperComponent {
  form = new FormGroup({});
}

describe('RegistrationFormCardComponent', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let registrationFormFacadeMock: RegistrationFormFacade;
  let registrationProcessFacadeMock: RegistrationProcessFacade;
  let formErrorsServiceMock: FormErrorsService;
  let validateFormSuccess$: ReplaySubject<void>;
  let createFormSuccess$: ReplaySubject<void>;
  let validateFormFailure$: ReplaySubject<HttpErrorResponse>;
  let createFormFailure$: ReplaySubject<HttpErrorResponse>;
  let form$: ReplaySubject<Record<string, any>>;

  beforeEach(() => {
    registrationFormFacadeMock = mock(RegistrationFormFacade);
    registrationProcessFacadeMock = mock(RegistrationProcessFacade);
    formErrorsServiceMock = mock(FormErrorsService);

    validateFormSuccess$ = new ReplaySubject<void>(1);
    createFormSuccess$ = new ReplaySubject<void>(1);
    validateFormFailure$ = new ReplaySubject<HttpErrorResponse>(1);
    createFormFailure$ = new ReplaySubject<HttpErrorResponse>(1);
    form$ = new ReplaySubject<Record<string, any>>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MockModule(MatButtonModule),
        MockModule(ButtonsModule),
      ],
      declarations: [RegistrationFormCardComponent, WrapperComponent],
      providers: [
        providerOf(FormErrorsService, formErrorsServiceMock),
        providerOf(RegistrationProcessFacade, registrationProcessFacadeMock),
        providerOf(RegistrationFormFacade, registrationFormFacadeMock),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    when(registrationFormFacadeMock.validateFormSuccess$).thenReturn(validateFormSuccess$);
    when(registrationFormFacadeMock.validateFormFailure$).thenReturn(validateFormFailure$);
    when(registrationFormFacadeMock.createFormSuccess$).thenReturn(createFormSuccess$);
    when(registrationFormFacadeMock.createFormFailure$).thenReturn(createFormFailure$);
    when(registrationFormFacadeMock.form$).thenReturn(form$);

    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
