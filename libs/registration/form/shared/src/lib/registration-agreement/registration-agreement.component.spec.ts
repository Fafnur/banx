import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationAgreementComponent } from './registration-agreement.component';
import { RegistrationAgreementComponentPo } from './registration-agreement.component.po';

@Component({
  template: `<banx-registration-agreement automation-id="form" [control]="control"></banx-registration-agreement>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('RegistrationAgreementComponent', () => {
  let pageObject: RegistrationAgreementComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MockModule(MatCheckboxModule),
        MockModule(FormsSharedModule),
        MockModule(TrackersSharedModule),
        MockModule(NavigationSharedModule),
      ],
      declarations: [RegistrationAgreementComponent, WrapperComponent],
      providers: [PATHS_STUB],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RegistrationAgreementComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.idText).toBe('Agreement');
    expect(pageObject.checkboxText).toBe('I agree with terms and conditions');
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.hasInputTrackAttr).toBeTruthy();
  });
});
