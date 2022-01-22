import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormErrorsModule } from '@banx/registration/form/ui/errors';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationEmployerNameComponent } from './registration-employer-name.component';
import { RegistrationEmployerNameLabelPipe } from './registration-employer-name-label.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsSharedModule,
    TrackersSharedModule,
    RegistrationFormErrorsModule,
  ],
  declarations: [RegistrationEmployerNameComponent, RegistrationEmployerNameLabelPipe],
  exports: [RegistrationEmployerNameComponent],
})
export class RegistrationEmployerNameModule {}
