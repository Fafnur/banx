import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationPeriodOfUnemploymentComponent } from './registration-period-of-unemployment.component';
import { RegistrationPeriodOfUnemploymentLabelPipe } from './registration-period-of-unemployment-label.pipe';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, FormsSharedModule, TrackersSharedModule],
  declarations: [RegistrationPeriodOfUnemploymentComponent, RegistrationPeriodOfUnemploymentLabelPipe],
  exports: [RegistrationPeriodOfUnemploymentComponent],
})
export class RegistrationPeriodOfUnemploymentModule {}
