import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { AuthFacade } from '@banx/auth/state';
import { NavigationPaths, PATHS } from '@banx/core/navigation/common';
import { NavigationService } from '@banx/core/navigation/service';
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

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly authFacade: AuthFacade,
    private readonly navigationService: NavigationService,
    @Inject(PATHS) private readonly paths: NavigationPaths
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      [UserField.Phone]: new FormControl(null, [Validators.required]),
      [UserField.Password]: new FormControl(null, [Validators.required]),
    });

    this.form.valueChanges
      .pipe(
        tap(() => {
          if (this.loginError) {
            this.loginError = null;
            this.changeDetectorRef.markForCheck();
          }
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

    this.authFacade.loginSuccess$
      .pipe(
        // TODO: After created customer space need to add redirect to profile
        tap(() => void this.navigationService.navigateByUrl(this.paths.home)),
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
      // TODO: Russian only. Need to use phone prefix.
      this.authFacade.login({ ...this.form.value, phone: this.form.value[UserField.Phone].slice(1) });
    }

    this.changeDetectorRef.markForCheck();
  }
}
