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
import { RegistrationSocialFacade } from '@banx/registration/social/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { RegistrationStepErrorModule } from '@banx/russian/registration/ui/step-error';
import { SpinnerModule } from '@banx/ui/spinner';

import { RegistrationSocialPageComponent } from './registration-social-page.component';
import { RegistrationSocialPageComponentPo } from './registration-social-page.component.po';

describe('RegistrationSocialPageComponent', () => {
  let pageObject: RegistrationSocialPageComponentPo;
  let fixture: ComponentFixture<RegistrationSocialPageComponent>;
  let registrationSocialFacadeMock: RegistrationSocialFacade;
  let finishSocialFailure$: ReplaySubject<HttpErrorResponse>;

  beforeEach(() => {
    registrationSocialFacadeMock = mock(RegistrationSocialFacade);
    finishSocialFailure$ = new ReplaySubject<HttpErrorResponse>(1);
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
      declarations: [RegistrationSocialPageComponent],
      providers: [providerOf(RegistrationSocialFacade, registrationSocialFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(registrationSocialFacadeMock.finishSocialFailure$).thenReturn(finishSocialFailure$);

    fixture = TestBed.createComponent(RegistrationSocialPageComponent);
    pageObject = new RegistrationSocialPageComponentPo(fixture);
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
