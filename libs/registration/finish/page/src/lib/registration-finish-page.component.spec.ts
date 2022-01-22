import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { AuthFacade } from '@banx/auth/state';
import { NAVIGATION_PATHS } from '@banx/core/navigation/common';
import { NavigationService } from '@banx/core/navigation/service';
import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { providerOf } from '@banx/core/testing';
import { RegistrationFinishResponse } from '@banx/registration/finish/common';
import { RegistrationFinishFacade } from '@banx/registration/finish/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { RegistrationStepErrorModule } from '@banx/registration/ui/step-error';
import { SpinnerModule } from '@banx/ui/spinner';
import { UserAuth } from '@banx/users/common';

import { RegistrationFinishPageComponent } from './registration-finish-page.component';
import { RegistrationFinishPageComponentPo } from './registration-finish-page.component.po';

describe('RegistrationFinishPageComponent', () => {
  let pageObject: RegistrationFinishPageComponentPo;
  let fixture: ComponentFixture<RegistrationFinishPageComponent>;
  let registrationFinishFacadeMock: RegistrationFinishFacade;
  let finishRegistrationFailure$: ReplaySubject<HttpErrorResponse>;
  let finishRegistrationSuccess$: ReplaySubject<RegistrationFinishResponse>;
  let navigationServiceMock: NavigationService;
  let authFacadeMock: AuthFacade;
  let loginSuccess$: ReplaySubject<UserAuth>;

  beforeEach(() => {
    registrationFinishFacadeMock = mock(RegistrationFinishFacade);
    navigationServiceMock = mock(NavigationService);
    authFacadeMock = mock(AuthFacade);
    finishRegistrationFailure$ = new ReplaySubject<HttpErrorResponse>(1);
    finishRegistrationSuccess$ = new ReplaySubject<RegistrationFinishResponse>(1);
    loginSuccess$ = new ReplaySubject<UserAuth>(1);
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
        MockModule(NavigationSharedModule),
      ],
      declarations: [RegistrationFinishPageComponent],
      providers: [
        providerOf(RegistrationFinishFacade, registrationFinishFacadeMock),
        providerOf(NavigationService, navigationServiceMock),
        providerOf(AuthFacade, authFacadeMock),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);
    when(authFacadeMock.loginSuccess$).thenReturn(loginSuccess$);
    when(registrationFinishFacadeMock.finishRegistrationFailure$).thenReturn(finishRegistrationFailure$);
    when(registrationFinishFacadeMock.finishRegistrationSuccess$).thenReturn(finishRegistrationSuccess$);

    fixture = TestBed.createComponent(RegistrationFinishPageComponent);
    pageObject = new RegistrationFinishPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.titleText).toBe('Data processing');
    expect(pageObject.contentText).toBe('Please wait ...');
    expect(pageObject.card).toBeTruthy();
    expect(pageObject.actions).toBeNull();
    expect(pageObject.submit).toBeNull();
    expect(pageObject.spinner).toBeTruthy();
  });
});
