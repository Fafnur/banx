import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { AnyMaskedOptions } from 'imask';
import { Observable } from 'rxjs';
import { filter, take, takeUntil, tap } from 'rxjs/operators';

import { DestroyService } from '@banx/core/services';
import { getMaskDate, getMaxDate, getMinDate } from '@banx/core/utils';
import { GridBreakpointType, GridService } from '@banx/ui/grid';

@Component({
  selector: 'banx-auth-recovery-form-birthdate',
  templateUrl: './recovery-form-birthdate.component.html',
  styleUrls: ['./recovery-form-birthdate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class RecoveryFormBirthdateComponent implements OnInit {
  @Input() control!: UntypedFormControl;

  readonly maxDate = getMaxDate();
  readonly minDate = getMinDate();

  readonly id = 'AuthRecoveryBirthdate';

  readonly mask: AnyMaskedOptions = {
    mask: Date,
    min: this.minDate,
    max: this.maxDate,
  };

  isDesktopScreen$!: Observable<boolean>;

  readonly maskControl = new UntypedFormControl(null, [Validators.required]);

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly gridService: GridService,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.isDesktopScreen$ = this.gridService.up(GridBreakpointType.Md);

    if (this.control.value) {
      this.maskControl.patchValue(getMaskDate(this.control.value), { emitEvent: false });
    }

    this.control.valueChanges
      .pipe(
        filter((value) => Boolean(value)),
        take(1),
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

  onSelected(event: any): void {
    this.maskControl.patchValue(getMaskDate(event.value), { emitEvent: false });
  }
}
