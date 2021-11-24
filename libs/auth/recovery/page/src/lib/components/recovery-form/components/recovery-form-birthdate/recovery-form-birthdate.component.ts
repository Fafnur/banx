import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AnyMaskedOptions } from 'imask';
import { Subject } from 'rxjs';
import { filter, take, takeUntil, tap } from 'rxjs/operators';

import { extractTouchedChanges } from '@banx/core/forms/utils';
import { getMaskDate, getMaxDate, getMinDate } from '@banx/core/utils';
import { GridBreakpointsUp } from '@banx/ui/grid';

@Component({
  selector: 'banx-auth-recovery-form-birthdate',
  templateUrl: './recovery-form-birthdate.component.html',
  styleUrls: ['./recovery-form-birthdate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoveryFormBirthdateComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl;

  readonly maxDate = getMaxDate();
  readonly minDate = getMinDate();

  readonly mask: AnyMaskedOptions = {
    mask: Date,
    min: this.minDate,
    max: this.maxDate,
  };

  isDesktopScreen = false;
  maskControl = new FormControl(null, [Validators.required]);

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    extractTouchedChanges(this.control)
      .pipe(
        tap(() => {
          this.maskControl.markAsTouched();
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.breakpointObserver
      .observe(GridBreakpointsUp.Md)
      .pipe(
        tap((breakpoints) => {
          this.isDesktopScreen = breakpoints.matches;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSelected(event: any): void {
    this.maskControl.patchValue(getMaskDate(event.value), { emitEvent: false });
  }
}
