import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { Action } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LoggerService } from '@banx/core/logger/service';
import { VisitorService } from '@banx/core/visitor/service';
import { TrackerApiService } from '@banx/trackers/api';
import { TrackerEventType } from '@banx/trackers/common';
import { TrackerService } from '@banx/trackers/service';

import * as TrackerActions from './tracker.actions';

@Injectable()
export class TrackerEffects implements OnInitEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrackerActions.init),
      fetch({
        run: () => TrackerActions.saveRecords(),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  saveRecords$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrackerActions.saveRecords),
      fetch({
        id: () => 'tracker-save',
        run: () => {
          // TODO: Add logic for fake login
          const records = this.trackerService.getRecords();

          return records && records.length
            ? this.trackerApiService
                .save({
                  records,
                  visitor: this.visitorService.getUuid(),
                })
                .pipe(
                  map<void, Action>(() => {
                    this.trackerService.removeRecords(records);

                    return TrackerActions.saveRecordsSuccess();
                  }),
                  catchError((error) => {
                    this.trackerService.unmarkRecords(records);

                    return throwError(error);
                  })
                )
            : TrackerActions.saveRecordsSuccess();
        },
        onError: (action, error) =>
          this.loggerService.logEffect({ context: { action, error } }, TrackerActions.saveRecordsFailure({ payload: error })),
      })
    )
  );

  addRecord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrackerActions.addRecord),
      fetch({
        id: () => 'tracker-add-record',
        run: (action) => this.trackerService.add(action.payload),
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  routerNavigated$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      fetch({
        id: () => 'tracker-router-navigated',
        run: (action: any) => {
          const url = action.payload.event.url ?? 'unknown';
          const payload = { element: 'router', type: TrackerEventType.Navigate, value: url };
          this.trackerService.add(payload);
        },
        onError: (action, error) => this.loggerService.logEffect({ context: { action, error } }),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly loggerService: LoggerService,
    private readonly trackerService: TrackerService,
    private readonly visitorService: VisitorService,
    private readonly trackerApiService: TrackerApiService
  ) {}

  ngrxOnInitEffects(): Action {
    return TrackerActions.init();
  }
}
