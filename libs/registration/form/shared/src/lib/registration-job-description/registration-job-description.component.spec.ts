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

import { RegistrationJobDescriptionComponent } from './registration-job-description.component';
import { RegistrationJobDescriptionComponentPo } from './registration-job-description.component.po';
import { RegistrationJobDescriptionLabelPipe } from './registration-job-description-label.pipe';

@Component({
  template: `<banx-registration-job-description automation-id="form" [control]="control"></banx-registration-job-description>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('RegistrationJobDescriptionComponent', () => {
  let pageObject: RegistrationJobDescriptionComponentPo;
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
      declarations: [RegistrationJobDescriptionComponent, WrapperComponent, RegistrationJobDescriptionLabelPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RegistrationJobDescriptionComponentPo(fixture);
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

    expect(pageObject.idText).toBe('JobDescription');
    expect(pageObject.labelText).toBe('What do you do?');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.hasInputTrackAttr).toBeTruthy();
  });
});
