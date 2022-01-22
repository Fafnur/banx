import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnyMaskedOptions } from 'imask';

import { FormMaskService } from '@banx/core/forms/mask';

@Component({
  selector: 'banx-auth-login-form-username',
  templateUrl: './login-form-username.component.html',
  styleUrls: ['./login-form-username.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormUsernameComponent implements OnInit {
  @Input() control!: FormControl;

  readonly id = 'AuthUsername';

  mask!: AnyMaskedOptions;

  constructor(private readonly formMaskService: FormMaskService) {}

  ngOnInit(): void {
    this.mask = this.formMaskService.getPhoneMask();
  }
}
