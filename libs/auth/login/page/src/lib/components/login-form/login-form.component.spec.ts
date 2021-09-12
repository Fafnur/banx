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
import { providerOf } from '@banx/core/testing';
import { UserField } from '@banx/users/common';

import { LoginFormPasswordModule } from './components/login-form-password/login-form-password.module';
import { LoginFormUsernameModule } from './components/login-form-username/login-form-username.module';
import { LoginFormComponent } from './login-form.component';
import { LoginFormComponentPo } from './login-form.component.po';

describe('LoginFormComponent', () => {
  let pageObject: LoginFormComponentPo;
  let fixture: ComponentFixture<LoginFormComponent>;
  let authFacadeMock: AuthFacade;
  let loginFailure$: ReplaySubject<Record<string, any>>;

  beforeEach(() => {
    authFacadeMock = mock(AuthFacade);
    loginFailure$ = new ReplaySubject<Record<string, any>>(1);
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
        ],
        declarations: [LoginFormComponent],
        providers: [providerOf(AuthFacade, authFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(authFacadeMock.loginFailure$).thenReturn(loginFailure$);

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

  it('should be call reset', () => {
    fixture.detectChanges();
    pageObject.setForm({
      [UserField.Username]: '9231009988',
      [UserField.Password]: '123456',
    });

    pageObject.triggerLoginClick();
    fixture.detectChanges();

    verify(
      authFacadeMock.login(
        deepEqual({
          [UserField.Username]: '9231009988',
          [UserField.Password]: '123456',
        })
      )
    ).once();
  });
});
