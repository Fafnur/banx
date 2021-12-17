import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormErrorsModule } from '@banx/registration/form/ui/errors';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationDriverLicenseComponent } from './registration-driver-license.component';
import { RegistrationDriverLicenseComponentPo } from './registration-driver-license.component.po';

@Component({
  template: `<banx-registration-driver-license automation-id="form" [control]="control"></banx-registration-driver-license>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('RegistrationDriverLicenseComponent', () => {
  let pageObject: RegistrationDriverLicenseComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        MockModule(MatRadioModule),
        MockModule(FormsSharedModule),
        MockModule(TrackersSharedModule),
        MockModule(RegistrationFormErrorsModule),
      ],
      declarations: [RegistrationDriverLicenseComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RegistrationDriverLicenseComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.idYesText).toBe('DriverLicense');
    expect(pageObject.idNoText).toBe('DriverLicense');
    expect(pageObject.labelText).toBe('Do you have a driver’s license?');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.radioGroup).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.hasYesTrackAttr).toBeTruthy();
    expect(pageObject.hasNoTrackAttr).toBeTruthy();
  });
});
