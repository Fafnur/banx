import { Action } from '@ngrx/store';

import { HTTP_ERROR_STUB } from '@banx/core/api/service';
import { createStateMock } from '@banx/core/store/utils';

import * as RegistrationSocialActions from './registration-social.actions';
import { reducer, registrationSocialInitialState, RegistrationSocialState } from './registration-social.reducer';

describe('RegistrationSocial Reducer', () => {
  const getState = createStateMock(registrationSocialInitialState);
  let state: RegistrationSocialState;

  beforeEach(() => {
    state = getState();
  });

  it('finishSocial() should set socialFinishing true', () => {
    const action = RegistrationSocialActions.finishSocial();
    const result = reducer(state, action);

    expect(result.socialFinishing).toBeTruthy();
  });

  it('finishSocialSuccess() should set socialFinishing false', () => {
    const action = RegistrationSocialActions.finishSocialSuccess();
    const result = reducer(state, action);

    expect(result.socialFinishing).toBeFalsy();
  });

  it('finishSocialFailure() should set socialFinishing false', () => {
    const action = RegistrationSocialActions.finishSocialFailure({ payload: HTTP_ERROR_STUB });
    const result = reducer(state, action);

    expect(result.socialFinishing).toBeFalsy();
  });

  it('should return the previous state', () => {
    const action = {} as Action;
    const result = reducer(registrationSocialInitialState, action);

    expect(result).toBe(registrationSocialInitialState);
  });
});
