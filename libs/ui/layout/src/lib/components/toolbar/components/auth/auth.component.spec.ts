import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { mock, verify, when } from 'ts-mockito';

import { AuthFacade } from '@banx/auth/state';
import { providerOf } from '@banx/core/testing';

import { AuthComponent } from './auth.component';
import { AuthComponentPo } from './auth.component.po';
import { LoginModule } from './components/login/login.module';
import { UserModule } from './components/user/user.module';

describe('AuthComponent', () => {
  let pageObject: AuthComponentPo;
  let fixture: ComponentFixture<AuthComponent>;
  let authFacadeMock: AuthFacade;
  let logged$: BehaviorSubject<boolean>;

  beforeEach(() => {
    authFacadeMock = mock(AuthFacade);
    logged$ = new BehaviorSubject<boolean>(false);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [MockModule(LoginModule), MockModule(UserModule)],
        declarations: [AuthComponent],
        providers: [providerOf(AuthFacade, authFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(authFacadeMock.logged$).thenReturn(logged$);

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

  it('should show user', () => {
    fixture.detectChanges();

    logged$.next(true);
    fixture.detectChanges();

    expect(pageObject.login).toBeFalsy();
    expect(pageObject.user).toBeTruthy();
  });

  it('should call logout', () => {
    fixture.detectChanges();

    logged$.next(true);
    fixture.detectChanges();

    pageObject.triggerLogout();

    verify(authFacadeMock.logout()).once();
  });
});
