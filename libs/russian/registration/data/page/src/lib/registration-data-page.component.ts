import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs';

import { DestroyService } from '@banx/core/services';
import { FingerprintFacade } from '@banx/fingerprints/state';
import { RegistrationProcessFacade } from '@banx/registration/process/state';

@Component({
  selector: 'banx-registration-data-page',
  templateUrl: './registration-data-page.component.html',
  styleUrls: ['./registration-data-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class RegistrationDataPageComponent implements OnInit {
  submitted = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly fingerprintFacade: FingerprintFacade,
    private readonly registrationProcessFacade: RegistrationProcessFacade,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.fingerprintFacade.finished$
      .pipe(
        tap(() => {
          this.registrationProcessFacade.load();
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onClick(): void {
    if (!this.submitted) {
      this.submitted = true;
      this.fingerprintFacade.run();
    }
  }
}
