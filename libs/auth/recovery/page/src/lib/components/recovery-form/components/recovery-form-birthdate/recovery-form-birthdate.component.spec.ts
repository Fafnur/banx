import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IMaskModule } from 'angular-imask';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';

import { RecoveryFormBirthdateComponent } from './recovery-form-birthdate.component';
import { RecoveryFormBirthdateComponentPo } from './recovery-form-birthdate.component.po';

@Component({
  template: `<banx-auth-recovery-form-birthdate automation-id="form-birthdate" [control]="control"></banx-auth-recovery-form-birthdate>`,
})
export class WrapperComponent {
  control = new FormControl();
}

describe('RecoveryFormBirthdateComponent', () => {
  let pageObject: RecoveryFormBirthdateComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          NoopAnimationsModule,
          MockModule(MatFormFieldModule),
          MockModule(MatInputModule),
          MockModule(MatDatepickerModule),
          MockModule(MatNativeDateModule),
          MockModule(FormsSharedModule),
          MockModule(IMaskModule),
        ],
        declarations: [RecoveryFormBirthdateComponent, WrapperComponent],
        providers: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RecoveryFormBirthdateComponentPo(fixture);
  });

  it('should be created', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should be show', () => {
    fixture.detectChanges();

    expect(pageObject.label).toBe('Date of birth');
    expect(pageObject.control).toBeTruthy();
  });
});
