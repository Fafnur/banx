import { Action, createReducer, on } from '@ngrx/store';

import * as RegistrationSocialActions from './registration-social.actions';

export const REGISTRATION_SOCIAL_FEATURE_KEY = 'registrationSocial';

export interface RegistrationSocialState {
  socialFinishing: boolean;
}

export interface RegistrationSocialPartialState {
  readonly [REGISTRATION_SOCIAL_FEATURE_KEY]: RegistrationSocialState;
}

export const registrationSocialInitialState: RegistrationSocialState = {
  socialFinishing: false,
};

const registrationSocialReducer = createReducer(
  registrationSocialInitialState,
  on(RegistrationSocialActions.finishSocial, (state) => ({
    ...state,
    socialFinishing: true,
  })),
  on(RegistrationSocialActions.finishSocialSuccess, (state) => ({
    ...state,
    socialFinishing: false,
  })),
  on(RegistrationSocialActions.finishSocialFailure, (state) => ({
    ...state,
    socialFinishing: false,
  }))
);

export function reducer(state: RegistrationSocialState | undefined, action: Action): RegistrationSocialState {
  return registrationSocialReducer(state, action);
}
