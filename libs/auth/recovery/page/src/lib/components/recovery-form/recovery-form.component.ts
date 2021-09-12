import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { AuthFacade } from '@banx/auth/state';
import { NavigationPaths, PATHS } from '@banx/core/navigation/common';
import { NavigationService } from '@banx/core/navigation/service';
import { UserField, UserSecrets } from '@banx/users/common';

import { RecoverySuccessDialogComponent } from './components/recovery-success-dialog/recovery-success-dialog.component';

@Component({
  selector: 'banx-auth-recovery-form',
  templateUrl: './recovery-form.component.html',
  styleUrls: ['./recovery-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoveryFormComponent implements OnInit, OnDestroy {
  readonly fields = UserField;
  form!: FormGroup;
  recoveryError!: Record<string, any> | null;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly authFacade: AuthFacade,
    private readonly matDialog: MatDialog,
    private readonly navigationService: NavigationService,
    @Inject(PATHS) private readonly paths: NavigationPaths
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
          void this.navigationService.navigateByUrl(this.paths.authLogin);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
    const date = new Date(data[UserField.Birthdate]);
    const res = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
    const secret = `${res.year}-${res.month.toString().padStart(2, '0')}-${res.day.toString().padStart(2, '0')}`;

    return {
      [UserField.Phone]: data[UserField.Phone].slice(1),
      [UserField.Birthdate]: secret,
    };
  }
}
