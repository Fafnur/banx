import { Injectable, OnDestroy } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { Action, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { Subscription, throwError, timer } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { LoggerService } from '@banx/core/logger/service';
import { PlatformService } from '@banx/core/platform/service';
import { VisitorService } from '@banx/core/visitor/service';
import { WindowService } from '@banx/core/windiw/service';
import { TrackerApiService } from '@banx/trackers/api';
import { TrackerEventType } from '@banx/trackers/common';
import { TrackerService } from '@banx/trackers/service';

import * as TrackerActions from './tracker.actions';
import { TrackerPartialState } from './tracker.reducer';

@Injectable()
export class TrackerEffects implements OnInitEffects, OnDestroy {
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
          this.trackerService.markRecords(records);

          return records && records.length > 0 && this.platformService.isBrowser
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

  private readonly subscription = new Subscription();

  constructor(
    private readonly eventManager: EventManager,
    private readonly actions$: Actions,
    private readonly store: Store<TrackerPartialState>,
    private readonly loggerService: LoggerService,
    private readonly trackerService: TrackerService,
    private readonly visitorService: VisitorService,
    private readonly trackerApiService: TrackerApiService,
    private readonly platformService: PlatformService,
    private readonly windowService: WindowService
  ) {
    if (this.windowService.window) {
      this.trackerService.add({
        element: 'window',
        type: TrackerEventType.Focus,
      });

      this.windowService.window.addEventListener('focus', () =>
        this.trackerService.add({
          element: 'window',
          type: TrackerEventType.Focus,
        })
      );
      this.windowService.window.addEventListener('blur', () =>
        this.trackerService.add({
          element: 'window',
          type: TrackerEventType.Blur,
        })
      );

      this.windowService.document.addEventListener('visibilitychange', () =>
        this.trackerService.add({
          element: 'window',
          type: TrackerEventType.VisibilityChange,
          value: this.windowService.document.hidden ? 'invisible' : 'visible',
        })
      );
    }

    this.subscription.add(
      this.trackerService.recordAdded$
        .pipe(switchMap(() => timer(5000).pipe(tap(() => this.store.dispatch(TrackerActions.saveRecords())))))
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngrxOnInitEffects(): Action {
    return TrackerActions.init();
  }
}
