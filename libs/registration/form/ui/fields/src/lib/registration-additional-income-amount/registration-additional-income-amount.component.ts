import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnyMaskedOptions } from 'imask';

import { FormMaskService } from '@banx/core/forms/mask';
import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-additional-income-amount',
  templateUrl: './registration-additional-income-amount.component.html',
  styleUrls: ['./registration-additional-income-amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationAdditionalIncomeAmountComponent implements OnInit {
  @Input() control!: FormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.AdditionalIncomeAmount];

  mask!: AnyMaskedOptions;

  constructor(private readonly formMaskService: FormMaskService) {}

  ngOnInit(): void {
    this.mask = this.formMaskService.geNumberMask({ min: 1, max: 9999999 });
  }
}
