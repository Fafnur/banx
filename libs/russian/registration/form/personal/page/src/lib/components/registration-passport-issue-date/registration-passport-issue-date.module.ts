import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IMaskModule } from 'angular-imask';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationPassportIssueDateComponent } from './registration-passport-issue-date.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsSharedModule,
    TrackersSharedModule,
    IMaskModule,
  ],
  declarations: [RegistrationPassportIssueDateComponent],
  exports: [RegistrationPassportIssueDateComponent],
})
export class RegistrationPassportIssueDateModule {}
