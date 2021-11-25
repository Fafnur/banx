import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationInstitutionDepartmentNameComponent } from './registration-institution-department-name.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, FormsSharedModule, TrackersSharedModule],
  declarations: [RegistrationInstitutionDepartmentNameComponent],
  exports: [RegistrationInstitutionDepartmentNameComponent],
})
export class RegistrationInstitutionDepartmentNameModule {}
