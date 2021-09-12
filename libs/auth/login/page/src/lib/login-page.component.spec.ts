import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { AuthCardModule } from '@banx/auth/shared';
import { PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { LoginFormModule } from './components/login-form/login-form.module';
import { LoginPageComponent } from './login-page.component';
import { LoginPageComponentPo } from './login-page.component.po';

describe('LoginPageComponent', () => {
  let pageObject: LoginPageComponentPo;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule, MockModule(AuthCardModule), MockModule(LoginFormModule), MockModule(NavigationSharedModule)],
        declarations: [LoginPageComponent],
        providers: [PATHS_STUB],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    pageObject = new LoginPageComponentPo(fixture);
  });

  it('should be created', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should be show', () => {
    fixture.detectChanges();

    expect(pageObject.card).toBeTruthy();
    expect(pageObject.titleText).toEqual('Log in Banx');
    expect(pageObject.subtitleText).toEqual('Enter your mobile phone number and password');
    expect(pageObject.form).toBeTruthy();
    expect(pageObject.links).toBeTruthy();
    expect(pageObject.hint).toBeTruthy();
    expect(pageObject.recovery).toBe('Forgot password?');
    // expect(pageObject.signUp).toBe('Sign up');
  });
});
