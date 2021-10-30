import { createEntityState, createStoreMock } from '@banx/core/store/utils';
import { REGISTRATION_STEP_STUB } from '@banx/registration/process/common';

import {
  REGISTRATION_PROCESS_FEATURE_KEY,
  registrationProcessInitialState,
  RegistrationProcessPartialState,
  RegistrationProcessState,
} from './registration-process.reducer';
import * as RegistrationProcessSelectors from './registration-process.selectors';

describe('RegistrationProcessSelectors', () => {
  const getStore = createStoreMock<RegistrationProcessState, RegistrationProcessPartialState>(
    REGISTRATION_PROCESS_FEATURE_KEY,
    registrationProcessInitialState
  );
  let store: RegistrationProcessPartialState;

  it('selectSelected() should return selected', () => {
    store = getStore({ selected: 1 });
    const results = RegistrationProcessSelectors.selectSelected(store);

    expect(results).toBe(1);
  });

  it('selectLoaded() should return loaded', () => {
    store = getStore({ loaded: true });
    const results = RegistrationProcessSelectors.selectLoaded(store);

    expect(results).toBeTruthy();
  });

  it('selectFinished() should return finished', () => {
    store = getStore({ finished: true });
    const results = RegistrationProcessSelectors.selectFinished(store);

    expect(results).toBeTruthy();
  });

  it('selectProcessId() should return processId', () => {
    const processId = '12345';
    store = getStore({ processId });
    const results = RegistrationProcessSelectors.selectProcessId(store);

    expect(results).toBe(processId);
  });

  it('selectSteps() should return step select run', () => {
    store = getStore(createEntityState([REGISTRATION_STEP_STUB]));
    const results = RegistrationProcessSelectors.selectSteps(store);

    expect(results.length).toBe(1);
  });

  it('selectStepsEntities() should return steps', () => {
    store = getStore(createEntityState([REGISTRATION_STEP_STUB]));
    const results = RegistrationProcessSelectors.selectStepsEntities(store);

    expect(Object.keys(results).length).toBe(1);
  });

  it('selectStep() should return step', () => {
    store = getStore(createEntityState([REGISTRATION_STEP_STUB]));
    const results = RegistrationProcessSelectors.selectStep(REGISTRATION_STEP_STUB.id)(store);

    expect(results).toEqual(REGISTRATION_STEP_STUB);
  });
});
