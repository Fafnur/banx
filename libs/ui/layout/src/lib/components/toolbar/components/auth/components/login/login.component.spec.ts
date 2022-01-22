import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { LoginComponent } from './login.component';
import { LoginComponentPo } from './login.component.po';

describe('LoginComponent', () => {
  let pageObject: LoginComponentPo;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          NoopAnimationsModule,
          MockModule(MatButtonModule),
          MockModule(MatIconModule),
          MockModule(NavigationSharedModule),
        ],
        declarations: [LoginComponent],
        providers: [PATHS_STUB],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    pageObject = new LoginComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.login).toBeTruthy();
    expect(pageObject.label).toBe('Sign in');
    expect(pageObject.icon).toBe('login');

    expect(pageObject.registration).toBeTruthy();
    expect(pageObject.registrationLabel).toBe('Sign up');
  });
});
