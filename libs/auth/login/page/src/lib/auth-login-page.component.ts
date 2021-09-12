import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthFacade } from '@banx/auth/state';
import { UserField } from '@banx/users/common';

@Component({
  selector: 'banx-auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrls: ['./auth-login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginPageComponent implements OnInit {
  form!: FormGroup;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      [UserField.Username]: new FormControl(null, [Validators.required]),
      [UserField.Password]: new FormControl(null, [Validators.required]),
    });
  }

  onLogin(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.authFacade.login(this.form.value);
    }

    this.changeDetectorRef.markForCheck();
  }
}
