import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'banx-auth-recovery-success-dialog',
  templateUrl: './recovery-success-dialog.component.html',
  styleUrls: ['./recovery-success-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoverySuccessDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public readonly phone: string) {}
}
