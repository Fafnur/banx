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

import { RegistrationMaritalStatusComponent } from './registration-marital-status.component';
import { RegistrationMaritalStatusComponentPo } from './registration-marital-status.component.po';
import { RegistrationMaritalStatusLabelPipe } from './registration-marital-status-label.pipe';

@Component({
  template: `<banx-registration-marital-status automation-id="form" [control]="control"></banx-registration-marital-status>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('RegistrationMaritalStatusComponent', () => {
  let pageObject: RegistrationMaritalStatusComponentPo;
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
      declarations: [RegistrationMaritalStatusComponent, WrapperComponent, MockPipe(RegistrationMaritalStatusLabelPipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RegistrationMaritalStatusComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.idText).toBe('MaritalStatus');
    expect(pageObject.labelText).toBe('Marital status');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.hasInputTrackAttr).toBeTruthy();
  });
});
