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
import { RegistrationConversion } from '@banx/registration/conversion/common';
import { RegistrationConversionFacade } from '@banx/registration/conversion/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { RegistrationStepErrorModule } from '@banx/russian/registration/ui/step-error';
import { SpinnerModule } from '@banx/ui/spinner';

import { RegistrationConversionPageComponent } from './registration-conversion-page.component';
import { RegistrationConversionComponentPo } from './registration-conversion-page.component.po';

describe('RegistrationConversionComponent', () => {
  let pageObject: RegistrationConversionComponentPo;
  let fixture: ComponentFixture<RegistrationConversionPageComponent>;
  let registrationConversionFacadeMock: RegistrationConversionFacade;
  let completeConversionFailure$: ReplaySubject<HttpErrorResponse>;
  let loadConversionFailure$: ReplaySubject<HttpErrorResponse>;
  let loadConversionSuccess$: ReplaySubject<RegistrationConversion>;

  beforeEach(() => {
    registrationConversionFacadeMock = mock(RegistrationConversionFacade);
    completeConversionFailure$ = new ReplaySubject<HttpErrorResponse>(1);
    loadConversionFailure$ = new ReplaySubject<HttpErrorResponse>(1);
    loadConversionSuccess$ = new ReplaySubject<RegistrationConversion>(1);
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
      declarations: [RegistrationConversionPageComponent],
      providers: [providerOf(RegistrationConversionFacade, registrationConversionFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(registrationConversionFacadeMock.loadConversionFailure$).thenReturn(loadConversionFailure$);
    when(registrationConversionFacadeMock.loadConversionSuccess$).thenReturn(loadConversionSuccess$);
    when(registrationConversionFacadeMock.completeConversionFailure$).thenReturn(completeConversionFailure$);

    fixture = TestBed.createComponent(RegistrationConversionPageComponent);
    pageObject = new RegistrationConversionComponentPo(fixture);
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
