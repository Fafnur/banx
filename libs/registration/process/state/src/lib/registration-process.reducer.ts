import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { RegistrationStepEntity } from '@banx/registration/process/common';

import * as RegistrationProcessActions from './registration-process.actions';

export const REGISTRATION_PROCESS_FEATURE_KEY = 'registrationProcess';

export interface RegistrationProcessState extends EntityState<RegistrationStepEntity> {
  readonly selected: number | null;
  readonly loaded: boolean;
  readonly subStep: string | null;
  readonly processId: string | null;
  readonly finished: boolean;
}

export const registrationProcessAdapter = createEntityAdapter<RegistrationStepEntity>();

export interface RegistrationProcessPartialState {
  readonly [REGISTRATION_PROCESS_FEATURE_KEY]: RegistrationProcessState;
}

export const registrationProcessInitialState: RegistrationProcessState = registrationProcessAdapter.getInitialState({
  selected: null,
  subStep: null,
  loaded: false,
  finished: false,
  processId: null,
});

const registrationProcessReducer = createReducer(
  registrationProcessInitialState,
  on(RegistrationProcessActions.restore, (state, { payload }) => ({
    ...state,
    ...payload,
    loaded: false,
  })),
  on(RegistrationProcessActions.restartProcess, (state) => ({
    ...state,
    processId: null,
    subStep: null,
    selected: null,
    loaded: false,
  })),
  on(RegistrationProcessActions.loadProcess, (state) => ({
    ...state,
    loaded: false,
  })),
  on(RegistrationProcessActions.loadProcessSuccess, (state, { payload }) =>
    registrationProcessAdapter.upsertMany(payload.steps, {
      ...state,
      processId: payload.processId,
      finished: payload.finished,
      loaded: true,
    })
  ),
  on(RegistrationProcessActions.loadProcessFailure, (state) => ({
    ...state,
    loaded: !!state.ids?.length,
  })),
  on(RegistrationProcessActions.selectStepSuccess, RegistrationProcessActions.selectSubStepSuccess, (state, { payload }) => ({
    ...state,
    selected: payload.step.id,
    subStep: payload.subStep,
  }))
);

export function reducer(state: RegistrationProcessState | undefined, action: Action): RegistrationProcessState {
  return registrationProcessReducer(state, action);
}
