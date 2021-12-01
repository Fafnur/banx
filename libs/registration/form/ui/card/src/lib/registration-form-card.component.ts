import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { takeUntil, tap } from 'rxjs';

import { DestroyService } from '@banx/core/services';
import { RegistrationFormFacade } from '@banx/registration/form/state';
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

    console.log(this.form.valid);
    if (this.form.valid) {
      this.submitted = true;
      this.registrationFormFacade.validate(this.form.value);
    }
    this.changeDetectorRef.markForCheck();
  }
}
