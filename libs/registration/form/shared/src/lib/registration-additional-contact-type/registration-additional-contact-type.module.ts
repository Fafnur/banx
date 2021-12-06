import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormErrorsModule } from '@banx/registration/form/ui/errors';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationAdditionalContactTypeComponent } from './registration-additional-contact-type.component';
import { RegistrationAdditionalContactTypeLabelPipe } from './registration-additional-contact-type-label.pipe';

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
  declarations: [RegistrationAdditionalContactTypeComponent, RegistrationAdditionalContactTypeLabelPipe],
  exports: [RegistrationAdditionalContactTypeComponent],
})
export class RegistrationAdditionalContactTypeModule {}
