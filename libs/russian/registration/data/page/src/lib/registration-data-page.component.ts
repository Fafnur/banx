import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { merge, take, takeUntil, tap } from 'rxjs';

import { DestroyService } from '@banx/core/services';
import { RegistrationDataFacade } from '@banx/registration/data/state';

@Component({
  selector: 'banx-registration-data-page',
  templateUrl: './registration-data-page.component.html',
  styleUrls: ['./registration-data-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class RegistrationDataPageComponent implements OnInit {
  submitted = false;
  isShowError = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly registrationDataFacade: RegistrationDataFacade,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.registrationDataFacade.detectFinished$
      .pipe(
        take(1),
        tap(() => this.registrationDataFacade.finish()),
        takeUntil(this.destroy$)
      )
      .subscribe();

    merge(this.registrationDataFacade.dataFinishFailure$)
      .pipe(
        tap(() => {
          this.submitted = false;
          this.isShowError = true;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onSubmit(): void {
    if (!this.submitted) {
      this.submitted = true;
      this.isShowError = false;
      this.registrationDataFacade.run();
    }
    this.changeDetectorRef.markForCheck();
  }
}
