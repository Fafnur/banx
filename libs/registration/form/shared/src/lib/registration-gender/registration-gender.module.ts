import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationGenderComponent } from './registration-gender.component';
import { RegistrationGenderLabelPipe } from './registration-gender-label.pipe';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, FormsSharedModule, TrackersSharedModule],
  declarations: [RegistrationGenderComponent, RegistrationGenderLabelPipe],
  exports: [RegistrationGenderComponent],
})
export class RegistrationGenderModule {}
