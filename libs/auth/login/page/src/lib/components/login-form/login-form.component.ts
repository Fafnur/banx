import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntil, tap } from 'rxjs/operators';

import { AuthFacade } from '@banx/auth/state';
import { NavigationService } from '@banx/core/navigation/service';
import { DestroyService } from '@banx/core/services';
import { UserField } from '@banx/users/common';

@Component({
  selector: 'banx-auth-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class LoginFormComponent implements OnInit {
  readonly fields = UserField;
  form!: FormGroup;
  loginError!: Record<string, any> | null;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly authFacade: AuthFacade,
    private readonly navigationService: NavigationService,
    private readonly destroy$: DestroyService
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
        tap(() => void this.navigationService.navigateByUrl(this.navigationService.getPaths().home)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onLogin(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      // TODO: Russian only. Need to use phone prefix.
      this.authFacade.login({ ...this.form.value, phone: this.form.value[UserField.Phone].slice(-10) });
    }

    this.changeDetectorRef.markForCheck();
  }
}
