import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IMaskModule } from 'angular-imask';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';

import { RecoveryFormPhoneComponent } from './recovery-form-phone.component';
import { RecoveryFormPhoneComponentPo } from './recovery-form-phone.component.po';

@Component({
  template: `<banx-auth-recovery-form-phone automation-id="form-phone" [control]="control"></banx-auth-recovery-form-phone>`,
})
export class WrapperComponent {
  control = new FormControl();
}

describe('RecoveryFormPhoneComponent', () => {
  let pageObject: RecoveryFormPhoneComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          NoopAnimationsModule,
          MockModule(MatFormFieldModule),
          MockModule(MatInputModule),
          MockModule(FormsSharedModule),
          MockModule(IMaskModule),
        ],
        declarations: [RecoveryFormPhoneComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RecoveryFormPhoneComponentPo(fixture);
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
