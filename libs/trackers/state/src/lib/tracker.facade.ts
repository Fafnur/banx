import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import { TrackerEvent } from '@banx/trackers/common';

import * as TrackerActions from './tracker.actions';
import { TrackerPartialState } from './tracker.reducer';
import * as TrackerSelectors from './tracker.selectors';

@Injectable()
export class TrackerFacade {
  saving$ = this.store.pipe(select(TrackerSelectors.selectSaving));

  constructor(private readonly store: Store<TrackerPartialState>) {}

  add(payload: TrackerEvent): void {
    this.dispatch(TrackerActions.addRecord({ payload }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
