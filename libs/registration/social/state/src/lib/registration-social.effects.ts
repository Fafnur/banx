import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { map, take, withLatestFrom } from 'rxjs/operators';

import { LoggerService } from '@banx/core/logger/service';
import { PlatformService } from '@banx/core/platform/service';
import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { navigateToNextStep, selectProcessId } from '@banx/registration/process/state';
import { RegistrationSocialApiService } from '@banx/registration/social/api';

import * as RegistrationSocialActions from './registration-social.actions';
import { RegistrationSocialPartialState } from './registration-social.reducer';

@Injectable()
export class RegistrationSocialEffects {
  finishSocial$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationSocialActions.finishSocial),
      withLatestFrom(this.store.pipe(select(selectProcessId), isNotNullOrUndefined(), take(1))),
      fetch({
        id: () => 'registration-social-finish',
        run: (action, processId: string) =>
          this.platformService.isBrowser
            ? this.registrationSocialApiService.finish(processId).pipe(map(() => RegistrationSocialActions.finishSocialSuccess()))
            : undefined,
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, RegistrationSocialActions.finishSocialFailure({ payload: error })),
      })
    )
  );

  finishSocialSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationSocialActions.finishSocialSuccess),
      fetch({
        id: () => 'registration-social-finish-success',
        run: () => navigateToNextStep(),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<RegistrationSocialPartialState>,
    private readonly registrationSocialApiService: RegistrationSocialApiService,
    private readonly platformService: PlatformService,
    private readonly loggerService: LoggerService
  ) {}
}
