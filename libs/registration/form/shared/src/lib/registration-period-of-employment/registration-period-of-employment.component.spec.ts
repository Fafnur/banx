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

import { RegistrationPeriodOfEmploymentComponent } from './registration-period-of-employment.component';
import { RegistrationPeriodOfEmploymentComponentPo } from './registration-period-of-employment.component.po';
import { RegistrationPeriodOfEmploymentLabelPipe } from './registration-period-of-employment-label.pipe';

@Component({
  template: `<banx-registration-period-of-employment automation-id="form" [control]="control"></banx-registration-period-of-employment>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('RegistrationPeriodOfEmploymentComponent', () => {
  let pageObject: RegistrationPeriodOfEmploymentComponentPo;
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
      declarations: [RegistrationPeriodOfEmploymentComponent, WrapperComponent, MockPipe(RegistrationPeriodOfEmploymentLabelPipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RegistrationPeriodOfEmploymentComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.idText).toBe('PeriodOfEmployment');
    expect(pageObject.labelText).toBe('How long you have been working here?');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.hasInputTrackAttr).toBeTruthy();
  });
});
