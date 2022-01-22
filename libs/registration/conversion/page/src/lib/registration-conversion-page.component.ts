import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { merge, takeUntil, tap } from 'rxjs';

import { DestroyService } from '@banx/core/services';
import { RegistrationConversionFacade } from '@banx/registration/conversion/state';

@Component({
  selector: 'banx-registration-conversion-page',
  templateUrl: './registration-conversion-page.component.html',
  styleUrls: ['./registration-conversion-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class RegistrationConversionPageComponent implements OnInit {
  submitted = false;
  isShowError = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly registrationConversionFacade: RegistrationConversionFacade,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.registrationConversionFacade.load();

    this.registrationConversionFacade.completeConversionFailure$
      .pipe(
        tap(() => {
          this.submitted = false;
          this.isShowError = true;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    merge(this.registrationConversionFacade.loadConversionSuccess$, this.registrationConversionFacade.loadConversionFailure$)
      .pipe(
        tap((result) => {
          if (!(result instanceof HttpErrorResponse)) {
            // TODO: Send google analytics
          }
          this.onSubmit();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onSubmit(): void {
    if (!this.submitted) {
      this.submitted = true;
      this.registrationConversionFacade.complete();
    }
    this.changeDetectorRef.markForCheck();
  }
}
