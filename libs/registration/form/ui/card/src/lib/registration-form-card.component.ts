import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take, takeUntil, tap } from 'rxjs';

import { DestroyService } from '@banx/core/services';
import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { RegistrationFormFacade } from '@banx/registration/form/state';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';
import { RegistrationProcessFacade } from '@banx/registration/process/state';

@Component({
  selector: 'banx-registration-form-card',
  templateUrl: './registration-form-card.component.html',
  styleUrls: ['./registration-form-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class RegistrationFormCardComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() step?: RegistrationFormSubSteps;
  @Input() first = false;
  @Input() last = false;

  submitted = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly registrationFormFacade: RegistrationFormFacade,
    private readonly registrationProcessFacade: RegistrationProcessFacade,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.registrationFormFacade.formFull$
      .pipe(
        isNotNullOrUndefined(),
        take(1),
        tap((form) => {
          this.form.patchValue(form);
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.registrationFormFacade.validateFormSuccess$
      .pipe(
        tap(() => {
          if (this.submitted) {
            if (this.last) {
              this.registrationFormFacade.create();
            } else {
              this.onNext();
            }
          }
          this.submitted = false;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.registrationFormFacade.validateFormFailure$
      .pipe(
        tap(() => {
          this.submitted = false;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onPrev(): void {
    this.registrationProcessFacade.selectSubStep('prev');
  }

  onNext(): void {
    this.registrationProcessFacade.selectSubStep('next');
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.submitted = true;
      this.registrationFormFacade.validate({ form: this.form.value, subStep: this.step });
    }
    this.changeDetectorRef.markForCheck();
  }
}
