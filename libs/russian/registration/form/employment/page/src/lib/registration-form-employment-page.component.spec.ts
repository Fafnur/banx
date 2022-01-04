import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormCardModule } from '@banx/registration/form/ui/card';
import {
  RegistrationAdditionalIncomeAmountModule,
  RegistrationEmployerNameModule,
  RegistrationEmploymentTypeModule,
  RegistrationInstitutionDepartmentNameModule,
  RegistrationInstitutionNameModule,
  RegistrationJobDescriptionModule,
  RegistrationMonthlyIncomeModule,
  RegistrationPeriodOfEmploymentModule,
  RegistrationPeriodOfUnemploymentModule,
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
        MockModule(RegistrationEmploymentTypeModule),
        MockModule(RegistrationEmployerNameModule),
        MockModule(RegistrationInstitutionNameModule),
        MockModule(RegistrationJobDescriptionModule),
        MockModule(RegistrationInstitutionDepartmentNameModule),
        MockModule(RegistrationMonthlyIncomeModule),
        MockModule(RegistrationAdditionalIncomeAmountModule),
        MockModule(RegistrationPeriodOfEmploymentModule),
        MockModule(RegistrationPeriodOfUnemploymentModule),
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
