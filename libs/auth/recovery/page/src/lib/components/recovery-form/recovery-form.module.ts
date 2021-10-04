import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { AuthFormModule } from '@banx/auth/shared';
import { FormsSharedModule } from '@banx/core/forms/shared';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RecoveryFormBirthdateModule } from './components/recovery-form-birthdate/recovery-form-birthdate.module';
import { RecoveryFormPhoneModule } from './components/recovery-form-phone/recovery-form-phone.module';
import { RecoverySuccessDialogModule } from './components/recovery-success-dialog/recovery-success-dialog.module';
import { RecoveryFormComponent } from './recovery-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsSharedModule,
    RecoveryFormPhoneModule,
    RecoveryFormBirthdateModule,
    AuthFormModule,
    RecoverySuccessDialogModule,
    TrackersSharedModule,
  ],
  declarations: [RecoveryFormComponent],
  exports: [RecoveryFormComponent],
})
export class RecoveryFormModule {}
