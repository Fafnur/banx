import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IMaskModule } from 'angular-imask';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormErrorsModule } from '@banx/registration/form/ui/errors';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationAdditionalIncomeAmountComponent } from './registration-additional-income-amount.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsSharedModule,
    TrackersSharedModule,
    RegistrationFormErrorsModule,
    IMaskModule,
  ],
  declarations: [RegistrationAdditionalIncomeAmountComponent],
  exports: [RegistrationAdditionalIncomeAmountComponent],
})
export class RegistrationAdditionalIncomeAmountModule {}
