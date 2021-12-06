import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule, MockPipe } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormErrorsModule } from '@banx/registration/form/ui/errors';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationDependentsAmountComponent } from './registration-dependents-amount.component';
import { RegistrationDependentsAmountComponentPo } from './registration-dependents-amount.component.po';
import { RegistrationDependentsAmountLabelPipe } from './registration-dependents-amount-label.pipe';

@Component({
  template: `<banx-registration-dependents-amount automation-id="form" [control]="control"></banx-registration-dependents-amount>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('RegistrationDependentsAmountComponent', () => {
  let pageObject: RegistrationDependentsAmountComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        MockModule(MatFormFieldModule),
        MockModule(MatSelectModule),
        MockModule(FormsSharedModule),
        MockModule(TrackersSharedModule),
        MockModule(RegistrationFormErrorsModule),
      ],
      declarations: [RegistrationDependentsAmountComponent, WrapperComponent, MockPipe(RegistrationDependentsAmountLabelPipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RegistrationDependentsAmountComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.idText).toBe('DependentsAmount');
    expect(pageObject.labelText).toBe('Dependents');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.hasInputTrackAttr).toBeTruthy();
  });
});
