import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-auth-form-error',
  templateUrl: './auth-form-error.component.html',
  styleUrls: ['./auth-form-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormErrorComponent {}
