import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs';

import { DestroyService } from '@banx/core/services';
import { RegistrationUserFacade } from '@banx/registration/user/state';

@Component({
  selector: 'banx-registration-user-page',
  templateUrl: './registration-user-page.component.html',
  styleUrls: ['./registration-user-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class RegistrationUserPageComponent implements OnInit {
  submitted = false;
  isShowError = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly registrationUserFacade: RegistrationUserFacade,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.registrationUserFacade.createUserFailure$
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
      this.registrationUserFacade.createUser();
    }
    this.changeDetectorRef.markForCheck();
  }
}
