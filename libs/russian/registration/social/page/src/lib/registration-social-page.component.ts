import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs';

import { DestroyService } from '@banx/core/services';
import { SocialType } from '@banx/core/social/common';
import { RegistrationSocialFacade } from '@banx/registration/social/state';

@Component({
  selector: 'banx-registration-social-page',
  templateUrl: './registration-social-page.component.html',
  styleUrls: ['./registration-social-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class RegistrationSocialPageComponent implements OnInit {
  submitted = false;
  isShowError = false;

  readonly socials = [SocialType.Github, SocialType.Facebook, SocialType.Telegram];

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly registrationSocialFacade: RegistrationSocialFacade,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.registrationSocialFacade.finishSocialFailure$
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
      this.registrationSocialFacade.finish();
    }
    this.changeDetectorRef.markForCheck();
  }
}
