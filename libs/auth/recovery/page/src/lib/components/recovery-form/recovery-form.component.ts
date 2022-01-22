import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil, tap } from 'rxjs/operators';

import { AuthFacade } from '@banx/auth/state';
import { NavigationService } from '@banx/core/navigation/service';
import { DestroyService } from '@banx/core/services';
import { getBackendDate } from '@banx/core/utils';
import { UserField, UserSecrets } from '@banx/users/common';

import { RecoverySuccessDialogComponent } from './components/recovery-success-dialog/recovery-success-dialog.component';

@Component({
  selector: 'banx-auth-recovery-form',
  templateUrl: './recovery-form.component.html',
  styleUrls: ['./recovery-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class RecoveryFormComponent implements OnInit {
  readonly fields = UserField;

  form!: FormGroup;
  recoveryError!: Record<string, any> | null;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly authFacade: AuthFacade,
    private readonly matDialog: MatDialog,
    private readonly destroy$: DestroyService,
    private readonly navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      [UserField.Phone]: new FormControl(null, [Validators.required]),
      [UserField.Birthdate]: new FormControl(null, [Validators.required]),
    });

    this.form.valueChanges
      .pipe(
        tap(() => {
          if (this.recoveryError) {
            this.recoveryError = null;
            this.changeDetectorRef.markForCheck();
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.authFacade.recoveryFailure$
      .pipe(
        tap((recoveryError) => {
          this.recoveryError = recoveryError;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.authFacade.recoverySuccess$
      .pipe(
        tap(() => {
          void this.matDialog.open(RecoverySuccessDialogComponent, { data: this.getRecovery().phone });
          void this.navigationService.navigateByUrl(this.navigationService.getPaths().authLogin);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onReset(): void {
    this.form?.markAllAsTouched();

    if (this.form?.valid) {
      this.authFacade.recovery(this.getRecovery());
    }

    this.changeDetectorRef.markForCheck();
  }

  private getRecovery(): UserSecrets {
    const data = this.form.value;

    // TODO: Phone without code
    return {
      [UserField.Phone]: data[UserField.Phone].slice(-10),
      [UserField.Birthdate]: getBackendDate(data[UserField.Birthdate]),
    };
  }
}
