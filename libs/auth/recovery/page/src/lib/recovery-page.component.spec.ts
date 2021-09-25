import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { AuthCardModule } from '@banx/auth/shared';
import { PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { RecoveryFormModule } from './components/recovery-form/recovery-form.module';
import { RecoveryPageComponent } from './recovery-page.component';
import { RecoveryPageComponentPo } from './recovery-page.component.po';

describe('RecoveryPageComponent', () => {
  let pageObject: RecoveryPageComponentPo;
  let fixture: ComponentFixture<RecoveryPageComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule, MockModule(AuthCardModule), MockModule(RecoveryFormModule), MockModule(NavigationSharedModule)],
        declarations: [RecoveryPageComponent],
        providers: [PATHS_STUB],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryPageComponent);
    pageObject = new RecoveryPageComponentPo(fixture);
  });

  it('should be created', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should be show', () => {
    fixture.detectChanges();

    expect(pageObject.card).toBeTruthy();
    expect(pageObject.titleText).toEqual('Password Recovery');
    expect(pageObject.subtitleText).toEqual('Enter your mobile phone number and your birthdate');
    expect(pageObject.form).toBeTruthy();
    expect(pageObject.links).toBeTruthy();
    expect(pageObject.hint).toBeTruthy();
    expect(pageObject.login).toBe('Log in');
    // expect(pageObject.signUp).toBe('Sign up');
  });
});
