import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { AuthFormModule } from '@banx/auth/shared';
import { AuthFacade } from '@banx/auth/state';
import { FormsSharedModule } from '@banx/core/forms/shared';
import { PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationService } from '@banx/core/navigation/service';
import { providerOf } from '@banx/core/testing';
import { TrackersSharedModule } from '@banx/trackers/shared';
import { UserField } from '@banx/users/common';

import { RecoveryFormBirthdateModule } from './components/recovery-form-birthdate/recovery-form-birthdate.module';
import { RecoveryFormPhoneModule } from './components/recovery-form-phone/recovery-form-phone.module';
import { RecoverySuccessDialogModule } from './components/recovery-success-dialog/recovery-success-dialog.module';
import { RecoveryFormComponent } from './recovery-form.component';
import { RecoveryFormComponentPo } from './recovery-form.component.po';

describe('RecoveryFormComponent', () => {
  let pageObject: RecoveryFormComponentPo;
  let fixture: ComponentFixture<RecoveryFormComponent>;
  let authFacadeMock: AuthFacade;
  let matDialogMock: MatDialog;
  let recoverySuccess$: ReplaySubject<void>;
  let recoveryFailure$: ReplaySubject<Record<string, any>>;
  let afterClosed$: ReplaySubject<boolean>;
  let navigationServiceMock: NavigationService;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
    authFacadeMock = mock(AuthFacade);
    recoverySuccess$ = new ReplaySubject<void>(1);
    recoveryFailure$ = new ReplaySubject<Record<string, any>>(1);

    matDialogMock = mock(MatDialog);
    afterClosed$ = new ReplaySubject<boolean>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          NoopAnimationsModule,
          MockModule(MatButtonModule),
          MockModule(FormsSharedModule),
          MockModule(RecoveryFormPhoneModule),
          MockModule(RecoveryFormBirthdateModule),
          MockModule(AuthFormModule),
          MockModule(RecoverySuccessDialogModule),
          MockModule(TrackersSharedModule),
        ],
        declarations: [RecoveryFormComponent],
        providers: [
          providerOf(AuthFacade, authFacadeMock),
          providerOf(MatDialog, matDialogMock),
          providerOf(NavigationService, navigationServiceMock),
          PATHS_STUB,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(authFacadeMock.recoverySuccess$).thenReturn(recoverySuccess$);
    when(authFacadeMock.recoveryFailure$).thenReturn(recoveryFailure$);
    when(matDialogMock.open(anything(), anything())).thenReturn({ afterClosed: () => afterClosed$ } as any);

    fixture = TestBed.createComponent(RecoveryFormComponent);
    pageObject = new RecoveryFormComponentPo(fixture);
  });

  it('should be created', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should be show', () => {
    fixture.detectChanges();

    expect(pageObject.form).toBeTruthy();
    expect(pageObject.phone).toBeTruthy();
    expect(pageObject.birthdate).toBeTruthy();
    expect(pageObject.error).toBeFalsy();
    expect(pageObject.resetText).toBe('Reset password');
  });

  it('should be call reset', () => {
    fixture.detectChanges();
    pageObject.setForm({
      [UserField.Phone]: '9231009988',
      [UserField.Birthdate]: '2020-01-01',
    });

    pageObject.triggerResetClick();
    fixture.detectChanges();

    verify(
      authFacadeMock.recovery(
        deepEqual({
          [UserField.Phone]: '9231009988',
          [UserField.Birthdate]: '2020-01-01',
        })
      )
    ).once();
  });
});
