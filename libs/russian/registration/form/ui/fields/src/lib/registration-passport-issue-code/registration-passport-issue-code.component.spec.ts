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

import { RegistrationPassportIssueCodeComponent } from './registration-passport-issue-code.component';
import { RegistrationPassportIssueCodeComponentPo } from './registration-passport-issue-code.component.po';

@Component({
  template: `<banx-registration-passport-issue-code automation-id="form" [control]="control"></banx-registration-passport-issue-code>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('RegistrationPassportIssueCodeComponent', () => {
  let pageObject: RegistrationPassportIssueCodeComponentPo;
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
      declarations: [RegistrationPassportIssueCodeComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RegistrationPassportIssueCodeComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.idText).toBe('PassportIssueCode');
    expect(pageObject.labelText).toBe('Код подразделения');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.hasInputTrackAttr).toBeTruthy();
  });
});
