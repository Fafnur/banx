import { Action } from '@ngrx/store';

import { HTTP_ERROR_STUB } from '@banx/core/api/service';
import { createStateMock } from '@banx/core/store/utils';
import { REGISTRATION_FINISH_RESPONSE_STUB } from '@banx/registration/finish/common';

import * as RegistrationFinishActions from './registration-finish.actions';
import { reducer, registrationFinishInitialState, RegistrationFinishState } from './registration-finish.reducer';

describe('RegistrationFinish Reducer', () => {
  const getState = createStateMock(registrationFinishInitialState);
  let state: RegistrationFinishState;

  beforeEach(() => {
    state = getState();
  });

  it('finishRegistration() should set registrationFinishing true', () => {
    const action = RegistrationFinishActions.finishRegistration();
    const result = reducer(state, action);

    expect(result.registrationFinishing).toBeTruthy();
  });

  it('finishRegistrationSuccess() should set registrationFinishing false', () => {
    const action = RegistrationFinishActions.finishRegistrationSuccess({ payload: REGISTRATION_FINISH_RESPONSE_STUB });
    const result = reducer(state, action);

    expect(result.registrationFinishing).toBeFalsy();
  });

  it('finishRegistrationFailure() should set registrationFinishing false', () => {
    const action = RegistrationFinishActions.finishRegistrationFailure({ payload: HTTP_ERROR_STUB });
    const result = reducer(state, action);

    expect(result.registrationFinishing).toBeFalsy();
  });

  it('should return the previous state', () => {
    const action = {} as Action;
    const result = reducer(registrationFinishInitialState, action);

    expect(result).toBe(registrationFinishInitialState);
  });
});
