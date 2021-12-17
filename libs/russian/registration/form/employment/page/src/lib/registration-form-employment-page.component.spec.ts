import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormCardModule } from '@banx/registration/form/ui/card';
import {
  RegistrationAdditionalContactNameModule,
  RegistrationAdditionalContactPhoneNumberModule,
  RegistrationAdditionalContactTypeModule,
  RegistrationAddressLineModule,
  RegistrationCityModule,
  RegistrationDependentsAmountModule,
  RegistrationHomeTypeModule,
  RegistrationKidsAmountModule,
  RegistrationMaritalStatusModule,
  RegistrationPostcodeModule,
  RegistrationRegionModule,
} from '@banx/registration/form/ui/fields';
import { GridModule } from '@banx/ui/grid';

import { RegistrationFormEmploymentPageComponent } from './registration-form-employment-page.component';

describe('RegistrationFormEmploymentPageComponent', () => {
  let component: RegistrationFormEmploymentPageComponent;
  let fixture: ComponentFixture<RegistrationFormEmploymentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CommonModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MockModule(FormsSharedModule),
        MockModule(RegistrationFormCardModule),
        MockModule(GridModule),
        MockModule(RegistrationRegionModule),
        MockModule(RegistrationCityModule),
        MockModule(RegistrationAddressLineModule),
        MockModule(RegistrationPostcodeModule),
        MockModule(RegistrationHomeTypeModule),
        MockModule(RegistrationMaritalStatusModule),
        MockModule(RegistrationKidsAmountModule),
        MockModule(RegistrationDependentsAmountModule),
        MockModule(RegistrationAdditionalContactNameModule),
        MockModule(RegistrationAdditionalContactTypeModule),
        MockModule(RegistrationAdditionalContactPhoneNumberModule),
      ],
      declarations: [RegistrationFormEmploymentPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormEmploymentPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
