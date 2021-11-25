import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationMaritalStatusComponent } from './registration-marital-status.component';
import { RegistrationMaritalStatusLabelPipe } from './registration-marital-status-label.pipe';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, FormsSharedModule, TrackersSharedModule],
  declarations: [RegistrationMaritalStatusComponent, RegistrationMaritalStatusLabelPipe],
  exports: [RegistrationMaritalStatusComponent],
})
export class RegistrationMaritalStatusModule {}
