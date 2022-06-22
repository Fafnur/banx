import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { AnyMaskedOptions } from 'imask';

import { FormMaskService } from '@banx/core/forms/mask';
import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';

@Component({
  selector: 'banx-registration-monthly-income',
  templateUrl: './registration-monthly-income.component.html',
  styleUrls: ['./registration-monthly-income.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationMonthlyIncomeComponent implements OnInit {
  @Input() control!: UntypedFormControl;

  readonly id = REGISTRATION_FORM_FIELD_IDS[RegistrationFormField.MonthlyIncome];

  mask!: AnyMaskedOptions;

  constructor(private readonly formMaskService: FormMaskService) {}

  ngOnInit(): void {
    this.mask = this.formMaskService.geNumberMask({ min: 1, max: 9999999 });
  }
}
