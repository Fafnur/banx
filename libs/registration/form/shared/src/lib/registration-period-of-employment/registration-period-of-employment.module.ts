import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormErrorsModule } from '@banx/registration/form/ui/errors';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationPeriodOfEmploymentComponent } from './registration-period-of-employment.component';
import { RegistrationPeriodOfEmploymentLabelPipe } from './registration-period-of-employment-label.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsSharedModule,
    TrackersSharedModule,
    RegistrationFormErrorsModule,
  ],
  declarations: [RegistrationPeriodOfEmploymentComponent, RegistrationPeriodOfEmploymentLabelPipe],
  exports: [RegistrationPeriodOfEmploymentComponent],
})
export class RegistrationPeriodOfEmploymentModule {}
