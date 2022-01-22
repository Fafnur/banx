import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnyMaskedOptions } from 'imask';

import { FormMaskService } from '@banx/core/forms/mask';
import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-additional-contact-phone-number',
  templateUrl: './registration-additional-contact-phone-number.component.html',
  styleUrls: ['./registration-additional-contact-phone-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationAdditionalContactPhoneNumberComponent implements OnInit {
  @Input() control!: FormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.AdditionalContactPhoneNumber];

  mask!: AnyMaskedOptions;

  constructor(private readonly formMaskService: FormMaskService) {}

  ngOnInit(): void {
    this.mask = this.formMaskService.getPhoneMask();
  }
}
