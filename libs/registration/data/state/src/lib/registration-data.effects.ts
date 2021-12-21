import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { map, take, withLatestFrom } from 'rxjs/operators';

import { LoggerService } from '@banx/core/logger/service';
import { PlatformService } from '@banx/core/platform/service';
import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { RegistrationDataApiService } from '@banx/registration/data/api';
import { loadProcess, selectProcessId } from '@banx/registration/process/state';

import * as RegistrationDataActions from './registration-data.actions';
import { RegistrationDataPartialState } from './registration-data.reducer';

@Injectable()
export class RegistrationDataEffects {
  finishData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationDataActions.finishData),
      withLatestFrom(this.store.pipe(select(selectProcessId), isNotNullOrUndefined(), take(1))),
      fetch({
        id: () => 'registration-form-load',
        run: (action, processId: string) =>
          this.platformService.isBrowser
            ? this.registrationDataApiService.finish(processId).pipe(map(() => RegistrationDataActions.finishDataSuccess()))
            : undefined,
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, RegistrationDataActions.finishDataFailure({ payload: error })),
      })
    )
  );

  finishDataSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationDataActions.finishDataSuccess),
      fetch({
        id: () => 'registration-data-finish-success',
        run: () => loadProcess(),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<RegistrationDataPartialState>,
    private readonly registrationDataApiService: RegistrationDataApiService,
    private readonly platformService: PlatformService,
    private readonly loggerService: LoggerService
  ) {}
}
