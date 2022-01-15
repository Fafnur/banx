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
import { RegistrationDecisionFacade } from '@banx/registration/decision/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { RegistrationStepErrorModule } from '@banx/russian/registration/ui/step-error';
import { SpinnerModule } from '@banx/ui/spinner';

import { RegistrationDecisionPageComponent } from './registration-decision-page.component';
import { RegistrationDecisionPageComponentPo } from './registration-decision-page.component.po';

describe('RegistrationDecisionPageComponent', () => {
  let pageObject: RegistrationDecisionPageComponentPo;
  let fixture: ComponentFixture<RegistrationDecisionPageComponent>;
  let registrationDecisionFacadeMock: RegistrationDecisionFacade;
  let makeDecisionFailure$: ReplaySubject<HttpErrorResponse>;

  beforeEach(() => {
    registrationDecisionFacadeMock = mock(RegistrationDecisionFacade);
    makeDecisionFailure$ = new ReplaySubject<HttpErrorResponse>(1);
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
      declarations: [RegistrationDecisionPageComponent],
      providers: [providerOf(RegistrationDecisionFacade, registrationDecisionFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(registrationDecisionFacadeMock.makeDecisionFailure$).thenReturn(makeDecisionFailure$);

    fixture = TestBed.createComponent(RegistrationDecisionPageComponent);
    pageObject = new RegistrationDecisionPageComponentPo(fixture);
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
    expect(pageObject.actions).toBeNull();
    expect(pageObject.submit).toBeNull();
    expect(pageObject.spinner).toBeTruthy();
  });
});
