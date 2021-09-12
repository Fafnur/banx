import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { AuthFacade } from '@banx/auth/state';
import { UserField } from '@banx/users/common';

@Component({
  selector: 'banx-auth-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit, OnDestroy {
  readonly fields = UserField;
  form!: FormGroup;
  loginError!: Record<string, any> | null;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      [UserField.Username]: new FormControl(null, [Validators.required]),
      [UserField.Password]: new FormControl(null, [Validators.required]),
    });

    this.form.valueChanges
      .pipe(
        tap(() => {
          this.loginError = null;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.authFacade.loginFailure$
      .pipe(
        tap((loginError) => {
          this.loginError = loginError;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onLogin(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.authFacade.login(this.form.value);
    }

    this.changeDetectorRef.markForCheck();
  }
}
