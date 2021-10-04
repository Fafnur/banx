import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { deepEqual, mock, verify, when } from 'ts-mockito';

import { AuthFormModule } from '@banx/auth/shared';
import { AuthFacade } from '@banx/auth/state';
import { FormsSharedModule } from '@banx/core/forms/shared';
import { NAVIGATION_PATHS, PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationService } from '@banx/core/navigation/service';
import { providerOf } from '@banx/core/testing';
import { TrackersSharedModule } from '@banx/trackers/shared';
import { USER_AUTH_STUB, UserAuth, UserField } from '@banx/users/common';

import { LoginFormPasswordModule } from './components/login-form-password/login-form-password.module';
import { LoginFormUsernameModule } from './components/login-form-username/login-form-username.module';
import { LoginFormComponent } from './login-form.component';
import { LoginFormComponentPo } from './login-form.component.po';

describe('LoginFormComponent', () => {
  let pageObject: LoginFormComponentPo;
  let fixture: ComponentFixture<LoginFormComponent>;
  let authFacadeMock: AuthFacade;
  let navigationServiceMock: NavigationService;
  let loginFailure$: ReplaySubject<Record<string, any>>;
  let loginSuccess$: ReplaySubject<UserAuth>;

  beforeEach(() => {
    authFacadeMock = mock(AuthFacade);
    navigationServiceMock = mock(NavigationService);
    loginFailure$ = new ReplaySubject<Record<string, any>>(1);
    loginSuccess$ = new ReplaySubject<UserAuth>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          NoopAnimationsModule,
          MockModule(MatButtonModule),
          MockModule(FormsSharedModule),
          MockModule(LoginFormPasswordModule),
          MockModule(LoginFormUsernameModule),
          MockModule(AuthFormModule),
          MockModule(TrackersSharedModule),
        ],
        declarations: [LoginFormComponent],
        providers: [PATHS_STUB, providerOf(AuthFacade, authFacadeMock), providerOf(NavigationService, navigationServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(authFacadeMock.loginFailure$).thenReturn(loginFailure$);
    when(authFacadeMock.loginSuccess$).thenReturn(loginSuccess$);

    fixture = TestBed.createComponent(LoginFormComponent);
    pageObject = new LoginFormComponentPo(fixture);
  });

  it('should be created', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should be show', () => {
    fixture.detectChanges();

    expect(pageObject.form).toBeTruthy();
    expect(pageObject.username).toBeTruthy();
    expect(pageObject.password).toBeTruthy();
    expect(pageObject.error).toBeFalsy();
    expect(pageObject.loginText).toBe('Log in');
  });

  it('should be call login', () => {
    fixture.detectChanges();
    pageObject.setForm({
      [UserField.Phone]: '9231009988',
      [UserField.Password]: '123456',
    });

    pageObject.triggerLoginClick();
    fixture.detectChanges();

    verify(
      authFacadeMock.login(
        deepEqual({
          [UserField.Phone]: '9231009988',
          [UserField.Password]: '123456',
        })
      )
    ).once();
  });

  it('should be redirected to home', () => {
    fixture.detectChanges();

    loginSuccess$.next(USER_AUTH_STUB);
    fixture.detectChanges();

    verify(navigationServiceMock.navigateByUrl(NAVIGATION_PATHS.home)).once();
  });
});
