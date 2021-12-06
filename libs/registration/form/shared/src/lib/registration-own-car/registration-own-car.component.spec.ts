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

import { RegistrationOwnCarComponent } from './registration-own-car.component';
import { RegistrationOwnCarComponentPo } from './registration-own-car.component.po';

@Component({
  template: `<banx-registration-own-car automation-id="form" [control]="control"></banx-registration-own-car>`,
})
class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
}

describe('RegistrationOwnCarComponent', () => {
  let pageObject: RegistrationOwnCarComponentPo;
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
      declarations: [RegistrationOwnCarComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RegistrationOwnCarComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.idYesText).toBe('OwnCar');
    expect(pageObject.idNoText).toBe('OwnCar');
    expect(pageObject.labelText).toBe('Do you have your own car?');
    expect(pageObject.formField).toBeTruthy();
    expect(pageObject.radioGroup).toBeTruthy();
    expect(pageObject.control).toBeTruthy();
    expect(pageObject.hasYesTrackAttr).toBeTruthy();
    expect(pageObject.hasNoTrackAttr).toBeTruthy();
  });
});
