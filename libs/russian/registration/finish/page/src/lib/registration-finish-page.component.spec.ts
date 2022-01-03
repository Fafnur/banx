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
import { RegistrationFinishFacade } from '@banx/registration/finish/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { RegistrationStepErrorModule } from '@banx/russian/registration/ui/step-error';
import { SpinnerModule } from '@banx/ui/spinner';

import { RegistrationFinishPageComponent } from './registration-finish-page.component';
import { RegistrationFinishPageComponentPo } from './registration-finish-page.component.po';

describe('RegistrationFinishPageComponent', () => {
  let pageObject: RegistrationFinishPageComponentPo;
  let fixture: ComponentFixture<RegistrationFinishPageComponent>;
  let registrationFinishFacadeMock: RegistrationFinishFacade;
  let finishRegistrationFailure$: ReplaySubject<HttpErrorResponse>;

  beforeEach(() => {
    registrationFinishFacadeMock = mock(RegistrationFinishFacade);
    finishRegistrationFailure$ = new ReplaySubject<HttpErrorResponse>(1);
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
      declarations: [RegistrationFinishPageComponent],
      providers: [providerOf(RegistrationFinishFacade, registrationFinishFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(registrationFinishFacadeMock.finishRegistrationFailure$).thenReturn(finishRegistrationFailure$);

    fixture = TestBed.createComponent(RegistrationFinishPageComponent);
    pageObject = new RegistrationFinishPageComponentPo(fixture);
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
