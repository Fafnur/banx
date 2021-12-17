import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take, takeUntil, tap } from 'rxjs';

import { FormErrorsService } from '@banx/core/forms/errors';
import { DestroyService } from '@banx/core/services';
import { LocalAsyncStorage } from '@banx/core/storage/local';
import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { RegistrationFormKeys } from '@banx/registration/form/common';
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
    private readonly localAsyncStorage: LocalAsyncStorage,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        isNotNullOrUndefined(),
        tap((formValue) => this.localAsyncStorage.setItem(RegistrationFormKeys.Form, { ...this.formAll, ...formValue })),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.registrationFormFacade.formFull$
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
