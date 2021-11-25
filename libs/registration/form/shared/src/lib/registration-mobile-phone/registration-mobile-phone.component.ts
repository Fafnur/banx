import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnyMaskedOptions } from 'imask';

import { FormMaskService } from '@banx/core/forms/mask';
import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-mobile-phone',
  templateUrl: './registration-mobile-phone.component.html',
  styleUrls: ['./registration-mobile-phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationMobilePhoneComponent implements OnInit {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.MobilePhone;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];

  mask!: AnyMaskedOptions;

  constructor(private readonly formMaskService: FormMaskService) {}

  ngOnInit(): void {
    this.mask = { mask: this.formMaskService.getPhoneMask() };
  }
}
