import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs';

import { DestroyService } from '@banx/core/services';
import { RegistrationDecisionFacade } from '@banx/registration/decision/state';

@Component({
  selector: 'banx-registration-decision-page',
  templateUrl: './registration-decision-page.component.html',
  styleUrls: ['./registration-decision-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class RegistrationDecisionPageComponent implements OnInit {
  submitted = false;
  isShowError = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly registrationDecisionFacade: RegistrationDecisionFacade,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.registrationDecisionFacade.makeDecisionFailure$
      .pipe(
        tap(() => {
          this.submitted = false;
          this.isShowError = true;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.onSubmit();
  }

  onSubmit(): void {
    if (!this.submitted) {
      this.submitted = true;
      this.registrationDecisionFacade.makeDecision();
    }
    this.changeDetectorRef.markForCheck();
  }
}
