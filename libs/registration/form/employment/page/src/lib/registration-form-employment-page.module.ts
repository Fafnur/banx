import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { RegistrationFormEmploymentPageRoutingModule } from './registration-form-employment-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationFormEmploymentPageRoutingModule,
    ReactiveFormsModule,
    FormsSharedModule,
    RegistrationFormCardModule,
    GridModule,
    RegistrationEmploymentTypeModule,
    RegistrationEmployerNameModule,
    RegistrationInstitutionNameModule,
    RegistrationJobDescriptionModule,
    RegistrationInstitutionDepartmentNameModule,
    RegistrationMonthlyIncomeModule,
    RegistrationAdditionalIncomeAmountModule,
    RegistrationPeriodOfEmploymentModule,
    RegistrationPeriodOfUnemploymentModule,
  ],
  declarations: [RegistrationFormEmploymentPageComponent],
})
export class RegistrationFormEmploymentPageModule {}
