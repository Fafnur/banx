import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormErrorsModule } from '@banx/registration/form/ui/errors';
import { TrackersSharedModule } from '@banx/trackers/shared';
import { GridModule } from '@banx/ui/grid';

import { RegistrationDriverLicenseComponent } from './registration-driver-license.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsSharedModule,
    TrackersSharedModule,
    GridModule,
    RegistrationFormErrorsModule,
  ],
  declarations: [RegistrationDriverLicenseComponent],
  exports: [RegistrationDriverLicenseComponent],
})
export class RegistrationDriverLicenseModule {}
