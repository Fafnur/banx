import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AnyMaskedOptions } from 'imask';
import { Observable, takeUntil, tap } from 'rxjs';

import { DestroyService } from '@banx/core/services';
import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { getMaskDate, getMaxDate, getMinDate } from '@banx/core/utils';
import { RUSSIAN_REGISTRATION_FORM_FIELD_IDS, RussianRegistrationFormField } from '@banx/russian/registration/form/common';
import { GridBreakpointType, GridService } from '@banx/ui/grid';

@Component({
  selector: 'banx-registration-passport-issue-date',
  templateUrl: './registration-passport-issue-date.component.html',
  styleUrls: ['./registration-passport-issue-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class RegistrationPassportIssueDateComponent implements OnInit {
  @Input() control!: FormControl;
  readonly maskControl = new FormControl(null, [Validators.required, Validators.minLength(8)]);

  readonly id = RUSSIAN_REGISTRATION_FORM_FIELD_IDS[RussianRegistrationFormField.PassportIssueDate];
  readonly maxDate = getMaxDate();
  readonly minDate = getMinDate();

  readonly mask: AnyMaskedOptions = {
    mask: Date,
    min: this.minDate,
    max: this.maxDate,
  };

  isDesktopScreen$!: Observable<boolean>;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly gridService: GridService,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.isDesktopScreen$ = this.gridService.up(GridBreakpointType.Md);

    if (this.control.value) {
      this.maskControl.patchValue(getMaskDate(this.control.value));
    }

    this.control.valueChanges
      .pipe(
        isNotNullOrUndefined(),
        tap((value) => {
          this.maskControl.patchValue(getMaskDate(value), { emitEvent: false });
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.maskControl.valueChanges
      .pipe(
        tap((value) => {
          const params = value?.split('.') ?? [];

          if (params.length === 3 && params[0].length === 2 && params[1].length === 2 && params[2].length === 4) {
            let date = new Date(`${params[2]}-${params[1]}-${params[0]}`);

            if (!isNaN(date.getTime())) {
              if (date.getTime() > this.maxDate.getTime()) {
                date = this.maxDate;
                this.maskControl.patchValue(getMaskDate(this.maxDate.toISOString()));
              } else if (date.getTime() < this.minDate.getTime()) {
                date = this.minDate;
                this.maskControl.patchValue(getMaskDate(this.minDate.toISOString()));
              }
              this.control.setErrors(null);
              this.control.patchValue(date.toISOString());
            } else {
              this.maskControl.setErrors({ required: true });
              this.control.setErrors({ required: true });
              this.control.markAsTouched();
              this.maskControl.markAsTouched();
            }

            this.changeDetectorRef.markForCheck();
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
