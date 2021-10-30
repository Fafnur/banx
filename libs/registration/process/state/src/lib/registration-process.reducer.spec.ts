import { createStateMock } from '@banx/core/store/utils';
import { PROCESS_ID_STUB, REGISTRATION_PROCESS_STUB, REGISTRATION_STEP_STUB } from '@banx/registration/process/common';

import * as RegistrationProcessActions from './registration-process.actions';
import { registrationProcessInitialState, registrationProcessReducer, RegistrationProcessState } from './registration-process.reducer';

describe('RegistrationProcessReducer', () => {
  const getState = createStateMock(registrationProcessInitialState);
  let state: RegistrationProcessState;

  beforeEach(() => {
    state = getState();
  });

  it('restore() should set processId and selected', () => {
    const action = RegistrationProcessActions.restore({
      payload: { processId: PROCESS_ID_STUB, selected: REGISTRATION_STEP_STUB.id, subStep: null },
    });
    const result = registrationProcessReducer(state, action);

    expect(result.processId).toBe(PROCESS_ID_STUB);
    expect(result.selected).toBe(REGISTRATION_STEP_STUB.id);
    expect(result.subStep).toBeNull();
  });

  it('loadProcess() should set loaded false', () => {
    const action = RegistrationProcessActions.loadProcess();
    const result = registrationProcessReducer(state, action);

    expect(result.loaded).toBeFalsy();
  });

  it('loadProcessSuccess() should set steps and props', () => {
    const action = RegistrationProcessActions.loadProcessSuccess({ payload: REGISTRATION_PROCESS_STUB });
    const result = registrationProcessReducer(state, action);

    expect(result.processId).toBe(REGISTRATION_PROCESS_STUB.processId);
    expect(result.finished).toBe(REGISTRATION_PROCESS_STUB.finished);
    expect(result.ids.length).toBe(REGISTRATION_PROCESS_STUB.steps.length);
    expect(result.loaded).toBeTruthy();
  });

  it('selectStep() should set selecting true', () => {
    const action = RegistrationProcessActions.selectStepSuccess({ payload: { step: REGISTRATION_STEP_STUB, subStep: null } });
    const result = registrationProcessReducer(state, action);

    expect(result.selected).toBe(REGISTRATION_STEP_STUB.id);
  });

  it('should return the initial state', () => {
    const action = {} as any;
    const result = registrationProcessReducer(state, action);

    expect(result).toEqual(registrationProcessInitialState);
  });
});
