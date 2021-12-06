import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormErrorsModule } from '@banx/registration/form/ui/errors';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationAdditionalIncomeAmountComponent } from './registration-additional-income-amount.component';
import { RegistrationAdditionalIncomeAmountComponentPo } from './registration-additional-income-amount.component.po';

@Component({
  template: `<banx-registration-additional-income-amount
    automation-id="form"
    [control]="control"
  ></banx-registration-additional-income-amount>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('RegistrationAdditionalIncomeAmountComponent', () => {
  let pageObject: RegistrationAdditionalIncomeAmountComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        MockModule(MatFormFieldModule),
        MockModule(MatInputModule),
        MockModule(FormsSharedModule),
        MockModule(TrackersSharedModule),
        MockModule(RegistrationFormErrorsModule),
      ],
      declarations: [RegistrationAdditionalIncomeAmountComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RegistrationAdditionalIncomeAmountComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.idText).toBe('AdditionalIncomeAmount');
    expect(pageObject.labelText).toBe('Additional income');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.hasInputTrackAttr).toBeTruthy();
  });
});
