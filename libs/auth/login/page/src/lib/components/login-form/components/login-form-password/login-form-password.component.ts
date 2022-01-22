import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'banx-auth-login-form-password',
  templateUrl: './login-form-password.component.html',
  styleUrls: ['./login-form-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormPasswordComponent {
  @Input() control!: FormControl;

  readonly id = 'AuthPassword';
}
