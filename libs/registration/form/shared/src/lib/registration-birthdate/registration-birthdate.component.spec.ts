import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IMaskModule } from 'angular-imask';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationBirthdateComponent } from './registration-birthdate.component';
import { RegistrationBirthdateComponentPo } from './registration-birthdate.component.po';

@Component({
  template: `<banx-registration-birthdate automation-id="form" [control]="control"></banx-registration-birthdate>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('RegistrationBirthdateComponent', () => {
  let pageObject: RegistrationBirthdateComponentPo;
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
        MockModule(MatDatepickerModule),
        MockModule(MatNativeDateModule),
        MockModule(IMaskModule),
      ],
      declarations: [RegistrationBirthdateComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RegistrationBirthdateComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.idText).toBe('Birthdate');
    expect(pageObject.idHiddenText).toBe('Birthdate');
    expect(pageObject.idDatepickerText).toBe('Birthdate');
    expect(pageObject.labelText).toBe('Date of birth');
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.hasInputTrackAttr).toBeTruthy();
    expect(pageObject.hasHiddenInputTrackAttr).toBeTruthy();
    expect(pageObject.hasDatepickerTrackAttr).toBeTruthy();
  });

  it('after change control, need to change maskControl', () => {
    fixture.detectChanges();

    pageObject.patchControlValue('2003-06-08T00:00:00.000Z');
    fixture.detectChanges();

    expect(pageObject.maskControl?.value).toBe('08.06.2003');
  });

  it('after change maskControl, need to change control', () => {
    fixture.detectChanges();

    pageObject.patchMaskControlValue('08.06.2003');
    fixture.detectChanges();

    expect(pageObject.control?.value).toBe('2003-06-08T00:00:00.000Z');
  });
});
