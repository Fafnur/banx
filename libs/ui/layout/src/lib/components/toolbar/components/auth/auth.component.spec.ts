import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { AuthComponent } from './auth.component';
import { AuthComponentPo } from './auth.component.po';
import { LoginModule } from './components/login/login.module';
import { UserModule } from './components/user/user.module';

describe('AuthComponent', () => {
  let pageObject: AuthComponentPo;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [MockModule(LoginModule), MockModule(UserModule)],
        declarations: [AuthComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    pageObject = new AuthComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.login).toBeTruthy();
    expect(pageObject.user).toBeFalsy();
  });

  // TODO: After integrate with user, add tests
});
