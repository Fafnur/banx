import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationPassportBirthplaceComponent } from './registration-passport-birthplace.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, FormsSharedModule, TrackersSharedModule],
  declarations: [RegistrationPassportBirthplaceComponent],
  exports: [RegistrationPassportBirthplaceComponent],
})
export class RegistrationPassportBirthplaceModule {}
