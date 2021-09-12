import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { RecoverySuccessDialogComponent } from './recovery-success-dialog.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  declarations: [RecoverySuccessDialogComponent],
  exports: [RecoverySuccessDialogComponent],
})
export class RecoverySuccessDialogModule {}
