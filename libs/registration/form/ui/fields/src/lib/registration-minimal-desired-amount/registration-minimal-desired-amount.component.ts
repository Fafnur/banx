import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnyMaskedOptions } from 'imask';

import { FormMaskService } from '@banx/core/forms/mask';
import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-minimal-desired-amount',
  templateUrl: './registration-minimal-desired-amount.component.html',
  styleUrls: ['./registration-minimal-desired-amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationMinimalDesiredAmountComponent implements OnInit {
  @Input() control!: FormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.MinimalDesiredAmount];

  mask!: AnyMaskedOptions;

  constructor(private readonly formMaskService: FormMaskService) {}

  ngOnInit(): void {
    this.mask = this.formMaskService.geNumberMask({ min: 1, max: 9999999 });
  }
}
