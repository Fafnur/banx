import { Action } from '@ngrx/store';

import { HTTP_ERROR_STUB } from '@banx/core/api/service';
import { createStateMock } from '@banx/core/store/utils';
import { REGISTRATION_CONVERSION_STUB } from '@banx/registration/conversion/common';

import * as RegistrationConversionActions from './registration-conversion.actions';
import { reducer, registrationConversionInitialState, RegistrationConversionState } from './registration-conversion.reducer';

describe('RegistrationConversion Reducer', () => {
  const getState = createStateMock(registrationConversionInitialState);
  let state: RegistrationConversionState;

  beforeEach(() => {
    state = getState();
  });

  it('loadConversion() should set conversionLoading true', () => {
    const action = RegistrationConversionActions.loadConversion();
    const result = reducer(state, action);

    expect(result.conversionLoading).toBeTruthy();
  });

  it('loadConversionSuccess() should set conversionLoading false', () => {
    const action = RegistrationConversionActions.loadConversionSuccess({ payload: REGISTRATION_CONVERSION_STUB });
    const result = reducer(state, action);

    expect(result.conversionLoading).toBeFalsy();
  });

  it('loadConversionFailure() should set conversionLoading false', () => {
    const action = RegistrationConversionActions.loadConversionFailure({ payload: HTTP_ERROR_STUB });
    const result = reducer(state, action);

    expect(result.conversionLoading).toBeFalsy();
  });

  it('completeConversion() should set conversionComplete true', () => {
    const action = RegistrationConversionActions.completeConversion();
    const result = reducer(state, action);

    expect(result.conversionComplete).toBeTruthy();
  });

  it('completeConversionSuccess() should set conversionComplete false', () => {
    const action = RegistrationConversionActions.completeConversionSuccess();
    const result = reducer(state, action);

    expect(result.conversionLoading).toBeFalsy();
  });

  it('completeConversionFailure() should set conversionComplete false', () => {
    const action = RegistrationConversionActions.completeConversionFailure({ payload: HTTP_ERROR_STUB });
    const result = reducer(state, action);

    expect(result.conversionLoading).toBeFalsy();
  });

  it('should return the previous state', () => {
    const action = {} as Action;
    const result = reducer(registrationConversionInitialState, action);

    expect(result).toBe(registrationConversionInitialState);
  });
});
