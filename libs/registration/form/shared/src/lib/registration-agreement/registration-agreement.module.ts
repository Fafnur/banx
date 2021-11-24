import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationAgreementComponent } from './registration-agreement.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsSharedModule,
    TrackersSharedModule,
    NavigationSharedModule,
  ],
  declarations: [RegistrationAgreementComponent],
  exports: [RegistrationAgreementComponent],
})
export class RegistrationAgreementModule {}
