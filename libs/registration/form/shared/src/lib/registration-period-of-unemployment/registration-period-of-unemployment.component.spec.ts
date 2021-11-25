import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule, MockPipe } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationPeriodOfUnemploymentComponent } from './registration-period-of-unemployment.component';
import { RegistrationPeriodOfUnemploymentComponentPo } from './registration-period-of-unemployment.component.po';
import { RegistrationPeriodOfUnemploymentLabelPipe } from './registration-period-of-unemployment-label.pipe';

@Component({
  template: `<banx-registration-period-of-unemployment
    automation-id="form"
    [control]="control"
  ></banx-registration-period-of-unemployment>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('RegistrationPeriodOfUnemploymentComponent', () => {
  let pageObject: RegistrationPeriodOfUnemploymentComponentPo;
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
      ],
      declarations: [RegistrationPeriodOfUnemploymentComponent, WrapperComponent, MockPipe(RegistrationPeriodOfUnemploymentLabelPipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RegistrationPeriodOfUnemploymentComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.idText).toBe('PeriodOfUnemployment');
    expect(pageObject.labelText).toBe('For how long?');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.hasInputTrackAttr).toBeTruthy();
  });
});
