import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';

import { LoginFormPasswordComponent } from './login-form-password.component';
import { LoginFormPasswordComponentPo } from './login-form-password.component.po';

@Component({
  template: `<banx-auth-login-form-password [control]="control"></banx-auth-login-form-password>`,
})
class WrapperComponent {
  readonly control: FormControl = new FormControl();
}

describe('LoginFormPasswordComponent', () => {
  let pageObject: LoginFormPasswordComponentPo;
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
        ],
        declarations: [LoginFormPasswordComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new LoginFormPasswordComponentPo(fixture);
  });

  it('should be created', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should be show', () => {
    fixture.detectChanges();

    expect(pageObject.label).toBe('Password');
    expect(pageObject.control).toBeTruthy();
  });
});
