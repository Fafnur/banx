import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IMaskModule } from 'angular-imask';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationAdditionalContactPhoneNumberComponent } from './registration-additional-contact-phone-number.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, IMaskModule, FormsSharedModule, TrackersSharedModule],
  declarations: [RegistrationAdditionalContactPhoneNumberComponent],
  exports: [RegistrationAdditionalContactPhoneNumberComponent],
})
export class RegistrationAdditionalContactPhoneNumberModule {}
