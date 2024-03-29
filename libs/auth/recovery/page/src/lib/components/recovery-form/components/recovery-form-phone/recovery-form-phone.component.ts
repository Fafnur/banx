import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { AnyMaskedOptions } from 'imask';

import { FormMaskService } from '@banx/core/forms/mask';

@Component({
  selector: 'banx-auth-recovery-form-phone',
  templateUrl: './recovery-form-phone.component.html',
  styleUrls: ['./recovery-form-phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoveryFormPhoneComponent implements OnInit {
  @Input() control!: UntypedFormControl;

  readonly id = 'AuthRecoveryPhone';

  mask!: AnyMaskedOptions;

  constructor(private readonly formMaskService: FormMaskService) {}

  ngOnInit(): void {
    this.mask = this.formMaskService.getPhoneMask();
  }
}
