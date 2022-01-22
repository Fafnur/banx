import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { combineLatest, takeUntil, tap } from 'rxjs';

import { AuthFacade } from '@banx/auth/state';
import { NavigationService } from '@banx/core/navigation/service';
import { DestroyService } from '@banx/core/services';
import { RegistrationFinishFacade } from '@banx/registration/finish/state';
import { UserStatus } from '@banx/users/common';

@Component({
  selector: 'banx-registration-finish-page',
  templateUrl: './registration-finish-page.component.html',
  styleUrls: ['./registration-finish-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class RegistrationFinishPageComponent implements OnInit {
  submitted = false;
  isShowError = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly registrationFinishFacade: RegistrationFinishFacade,
    private readonly authFacade: AuthFacade,
    private readonly navigationService: NavigationService,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.registrationFinishFacade.finishRegistrationFailure$
      .pipe(
        tap(() => {
          this.submitted = false;
          this.isShowError = true;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    combineLatest([this.registrationFinishFacade.finishRegistrationSuccess$, this.authFacade.loginSuccess$])
      .pipe(
        tap(([result]) => {
          const approved = [UserStatus.Registered, UserStatus.Verified].includes(result.status);
          const paths = this.navigationService.getPaths();
          void this.navigationService.navigateByUrl(approved ? paths.userApproved : paths.userRejected);

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
      this.registrationFinishFacade.finish();
    }
    this.changeDetectorRef.markForCheck();
  }
}
