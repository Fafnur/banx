import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IMaskModule } from 'angular-imask';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { LoginFormUsernameComponent } from './login-form-username.component';
import { LoginFormUsernameComponentPo } from './login-form-username.component.po';

@Component({
  template: `<banx-auth-login-form-username [control]="control"></banx-auth-login-form-username>`,
})
class WrapperComponent {
  control = new FormControl();
}

describe('LoginFormUsernameComponent', () => {
  let pageObject: LoginFormUsernameComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule,
          ReactiveFormsModule,
          MockModule(MatFormFieldModule),
          MockModule(MatInputModule),
          MockModule(FormsSharedModule),
          MockModule(IMaskModule),
          MockModule(TrackersSharedModule),
        ],
        declarations: [LoginFormUsernameComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new LoginFormUsernameComponentPo(fixture);
  });

  it('should be created', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should be show', () => {
    fixture.detectChanges();

    expect(pageObject.label).toBe('Mobile phone');
    expect(pageObject.control).toBeTruthy();
  });
});
