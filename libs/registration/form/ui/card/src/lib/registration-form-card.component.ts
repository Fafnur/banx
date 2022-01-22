import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounce, merge, take, takeUntil, tap, timer } from 'rxjs';

import { FormErrorsService } from '@banx/core/forms/errors';
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
  @Input() ids: Record<string, any> = {};
  @Input() first = false;
  @Input() last = false;

  submitted = false;
  private formAll!: Record<string, any>;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly registrationFormFacade: RegistrationFormFacade,
    private readonly registrationProcessFacade: RegistrationProcessFacade,
    private readonly formErrorsService: FormErrorsService,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        isNotNullOrUndefined(),
        debounce(() => timer(200)),
        tap((formValue) => {
          this.registrationFormFacade.updateForm({ ...this.formAll, ...formValue });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.registrationFormFacade.form$
      .pipe(
        isNotNullOrUndefined(),
        take(1),
        tap((form) => {
          this.formAll = form;
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
              this.submitted = false;
              this.onNext();
            }
          }
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.registrationFormFacade.createFormSuccess$
      .pipe(
        tap(() => {
          this.submitted = false;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    merge(this.registrationFormFacade.validateFormFailure$, this.registrationFormFacade.createFormFailure$)
      .pipe(
        tap((response) => {
          this.submitted = false;
          this.formErrorsService.updateFormErrors(this.form, response.error);
          this.formErrorsService.scrollToFirstError(this.form, this.ids);
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
