import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationEmploymentType, RegistrationFormField } from '@banx/registration/form/common';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationEmployerNameComponent } from './registration-employer-name.component';
import { RegistrationEmployerNameComponentPo } from './registration-employer-name.component.po';
import { RegistrationEmployerNameLabelPipe } from './registration-employer-name-label.pipe';

@Component({
  template: `<banx-registration-employer-name automation-id="form" [control]="control"></banx-registration-employer-name>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('RegistrationEmployerNameComponent', () => {
  let pageObject: RegistrationEmployerNameComponentPo;
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
      ],
      declarations: [RegistrationEmployerNameComponent, WrapperComponent, RegistrationEmployerNameLabelPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RegistrationEmployerNameComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    pageObject.setParent(
      new FormGroup({
        [RegistrationFormField.EmploymentType]: new FormControl(RegistrationEmploymentType.FullTime, [Validators.required]),
      })
    );
    fixture.detectChanges();

    expect(pageObject.idText).toBe('EmployerName');
    expect(pageObject.labelText).toBe('Where do you work?');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.hasInputTrackAttr).toBeTruthy();
  });
});
