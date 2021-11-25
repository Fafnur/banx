import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationKidsAmountComponent } from './registration-kids-amount.component';
import { RegistrationKidsAmountLabelPipe } from './registration-kids-amount-label.pipe';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, FormsSharedModule, TrackersSharedModule],
  declarations: [RegistrationKidsAmountComponent, RegistrationKidsAmountLabelPipe],
  exports: [RegistrationKidsAmountComponent],
})
export class RegistrationKidsAmountModule {}
