import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IMaskModule } from 'angular-imask';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormErrorsModule } from '@banx/registration/form/ui/errors';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationAdditionalContactPhoneNumberComponent } from './registration-additional-contact-phone-number.component';
import { RegistrationAdditionalContactPhoneNumberComponentPo } from './registration-additional-contact-phone-number.component.po';

@Component({
  template: `<banx-registration-additional-contact-phone-number
    automation-id="form"
    [control]="control"
  ></banx-registration-additional-contact-phone-number>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('RegistrationAdditionalContactPhoneNumberComponent', () => {
  let pageObject: RegistrationAdditionalContactPhoneNumberComponentPo;
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
        MockModule(IMaskModule),
        MockModule(RegistrationFormErrorsModule),
      ],
      declarations: [RegistrationAdditionalContactPhoneNumberComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RegistrationAdditionalContactPhoneNumberComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.idText).toBe('AdditionalContactPhoneNumber');
    expect(pageObject.labelText).toBe('Phone of additional contact');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.hasInputTrackAttr).toBeTruthy();
  });
});
