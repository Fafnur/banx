import { Action } from '@ngrx/store';

import { HTTP_ERROR_STUB } from '@banx/core/api/service';
import { createStateMock } from '@banx/core/store/utils';

import * as RegistrationDataActions from './registration-data.actions';
import { reducer, registrationDataInitialState, RegistrationDataState } from './registration-data.reducer';

describe('RegistrationData Reducer', () => {
  const getState = createStateMock(registrationDataInitialState);
  let state: RegistrationDataState;

  beforeEach(() => {
    state = getState();
  });

  it('finishData() should set dataFinishing true', () => {
    const action = RegistrationDataActions.finishData();
    const result = reducer(state, action);

    expect(result.dataFinishing).toBeTruthy();
  });

  it('finishDataSuccess() should set dataFinishing false', () => {
    const action = RegistrationDataActions.finishDataSuccess();
    const result = reducer(state, action);

    expect(result.dataFinishing).toBeFalsy();
  });

  it('finishDataFailure() should set dataFinishing false', () => {
    const action = RegistrationDataActions.finishDataFailure({ payload: HTTP_ERROR_STUB });
    const result = reducer(state, action);

    expect(result.dataFinishing).toBeFalsy();
  });

  it('should return the previous state', () => {
    const action = {} as Action;
    const result = reducer(registrationDataInitialState, action);

    expect(result).toBe(registrationDataInitialState);
  });
});
