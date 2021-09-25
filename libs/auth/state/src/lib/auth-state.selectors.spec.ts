import { createStoreMock } from '@banx/core/store/utils';

import { AUTH_FEATURE_KEY, authInitialState, AuthPartialState, AuthState } from './auth-state.reducer';
import * as AuthSelectors from './auth-state.selectors';

describe('Auth Selectors', () => {
  const getStore = createStoreMock<AuthState, AuthPartialState>(AUTH_FEATURE_KEY, authInitialState);
  let store: AuthPartialState;

  it('selectLogged() should return logged', () => {
    store = getStore({ logged: true });
    const results = AuthSelectors.selectLogged(store);

    expect(results).toBeTruthy();
  });
});
