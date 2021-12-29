import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { map, take, withLatestFrom } from 'rxjs/operators';

import { LoggerService } from '@banx/core/logger/service';
import { PlatformService } from '@banx/core/platform/service';
import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { RegistrationConversionApiService } from '@banx/registration/conversion/api';
import { loadProcess, selectProcessId } from '@banx/registration/process/state';

import * as RegistrationConversionActions from './registration-conversion.actions';
import { RegistrationConversionPartialState } from './registration-conversion.reducer';

@Injectable()
export class RegistrationConversionEffects {
  loadConversion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationConversionActions.loadConversion),
      withLatestFrom(this.store.pipe(select(selectProcessId), isNotNullOrUndefined(), take(1))),
      fetch({
        id: () => 'registration-load-conversion',
        run: (action, processId: string) =>
          this.platformService.isBrowser
            ? this.registrationConversionApiService
                .load(processId)
                .pipe(map((payload) => RegistrationConversionActions.loadConversionSuccess({ payload })))
            : undefined,
        onError: (action, error) =>
          this.loggerService.logEffect(
            { context: { action, error } },
            RegistrationConversionActions.loadConversionFailure({ payload: error })
          ),
      })
    )
  );

  completeConversion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationConversionActions.completeConversion),
      withLatestFrom(this.store.pipe(select(selectProcessId), isNotNullOrUndefined(), take(1))),
      fetch({
        id: () => 'registration-complete-conversion',
        run: (action, processId: string) =>
          this.platformService.isBrowser
            ? this.registrationConversionApiService
                .complete(processId)
                .pipe(map(() => RegistrationConversionActions.completeConversionSuccess()))
            : undefined,
        onError: (action, error) =>
          this.loggerService.logEffect(
            { context: { action, error } },
            RegistrationConversionActions.completeConversionFailure({ payload: error })
          ),
      })
    )
  );

  completeConversionSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationConversionActions.completeConversionSuccess),
      fetch({
        id: () => 'registration-conversion-complete-success',
        run: () => loadProcess(),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<RegistrationConversionPartialState>,
    private readonly registrationConversionApiService: RegistrationConversionApiService,
    private readonly platformService: PlatformService,
    private readonly loggerService: LoggerService
  ) {}
}
