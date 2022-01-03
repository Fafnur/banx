import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { RegistrationUserFacade } from '@banx/registration/user/state';
import { RegistrationStepErrorModule } from '@banx/russian/registration/ui/step-error';
import { SpinnerModule } from '@banx/ui/spinner';

import { RegistrationUserPageComponent } from './registration-user-page.component';
import { RegistrationUserPageComponentPo } from './registration-user-page.component.po';

describe('RegistrationUserPageComponent', () => {
  let pageObject: RegistrationUserPageComponentPo;
  let fixture: ComponentFixture<RegistrationUserPageComponent>;
  let registrationUserFacadeMock: RegistrationUserFacade;
  let createUserFailure$: ReplaySubject<HttpErrorResponse>;

  beforeEach(() => {
    registrationUserFacadeMock = mock(RegistrationUserFacade);
    createUserFailure$ = new ReplaySubject<HttpErrorResponse>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        RouterTestingModule,
        SpinnerModule,
        MockModule(MatButtonModule),
        MockModule(RegistrationCardModule),
        MockModule(RegistrationStepErrorModule),
      ],
      declarations: [RegistrationUserPageComponent],
      providers: [providerOf(RegistrationUserFacade, registrationUserFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(registrationUserFacadeMock.createUserFailure$).thenReturn(createUserFailure$);

    fixture = TestBed.createComponent(RegistrationUserPageComponent);
    pageObject = new RegistrationUserPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.titleText).toBe('Обработка данных');
    expect(pageObject.contentText).toBe('Пожалуйста, подождите ...');
    expect(pageObject.card).toBeTruthy();
    expect(pageObject.actions).toBeTruthy();
    expect(pageObject.submit).toBeTruthy();
    expect(pageObject.spinner).toBeNull();
  });
});
