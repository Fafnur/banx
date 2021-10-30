import { createFeatureSelector, createSelector } from '@ngrx/store';

import { REGISTRATION_PROCESS_FEATURE_KEY, registrationProcessAdapter, RegistrationProcessState } from './registration-process.reducer';

export const selectRegistrationProcessState = createFeatureSelector<RegistrationProcessState>(REGISTRATION_PROCESS_FEATURE_KEY);

const { selectAll, selectEntities } = registrationProcessAdapter.getSelectors();

export const selectSteps = createSelector(selectRegistrationProcessState, (state) => selectAll(state));

export const selectStepsEntities = createSelector(selectRegistrationProcessState, (state) => selectEntities(state));

export const selectSelected = createSelector(selectRegistrationProcessState, (state) => state.selected);

export const selectSubStep = createSelector(selectRegistrationProcessState, (state) => state.subStep);

export const selectLoaded = createSelector(selectRegistrationProcessState, (state) => state.loaded);

export const selectProcessId = createSelector(selectRegistrationProcessState, (state) => state.processId);

export const selectFinished = createSelector(selectRegistrationProcessState, (state) => state.finished);

export const selectSelectedStep = createSelector(selectStepsEntities, selectSelected, (entities, selected) =>
  selected ? entities[selected] ?? null : null
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectStep = (id: number) => createSelector(selectStepsEntities, (dictionary) => dictionary[id] ?? null);
