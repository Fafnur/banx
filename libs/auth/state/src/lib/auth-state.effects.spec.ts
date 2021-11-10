import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { AuthApiService } from '@banx/auth/api';
import { API_ERROR_RESPONSE_STUB } from '@banx/core/api/service';
import { LoggerService } from '@banx/core/logger/service';
import { SessionAsyncStorage } from '@banx/core/storage/session';
import { providerOf } from '@banx/core/testing';
import { USER_AUTH_STUB, USER_CREDENTIALS_STUB, USER_SECRETS_STUB, UserStorageKeys } from '@banx/users/common';

import * as AuthActions from './auth-state.actions';
import { AuthStateEffects } from './auth-state.effects';

describe('AuthEffects', () => {
  let actions$: Observable<Action>;
  let effects: AuthStateEffects;
  let authApiServiceMock: AuthApiService;
  let loggerServiceMock: LoggerService;
  let sessionAsyncStorageMock: SessionAsyncStorage;

  beforeEach(() => {
    authApiServiceMock = mock(AuthApiService);
    loggerServiceMock = mock(LoggerService);
    sessionAsyncStorageMock = mock(SessionAsyncStorage);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        providers: [
          AuthStateEffects,
          provideMockActions(() => actions$),
          providerOf(AuthApiService, authApiServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(SessionAsyncStorage, sessionAsyncStorageMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(sessionAsyncStorageMock.getItem(UserStorageKeys.AuthToken)).thenReturn(of(null));

    effects = TestBed.inject(AuthStateEffects);
  });

  describe('init$', () => {
    it('should return restore', () => {
      const action = AuthActions.init();
      const completion = AuthActions.restore({ payload: { logged: false } });

      actions$ = hot('-a-|', { a: action });

      const expected = hot('-a-|', { a: completion });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('login$', () => {
    it('should return loginSuccess', () => {
      const action = AuthActions.login({ payload: USER_CREDENTIALS_STUB });
      const completion = AuthActions.loginSuccess({ payload: USER_AUTH_STUB });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-a|', { a: USER_AUTH_STUB });
      const expected = cold('--a|', { a: completion });
      when(authApiServiceMock.login(deepEqual(USER_CREDENTIALS_STUB))).thenReturn(response);

      expect(effects.login$).toBeObservable(expected);

      verify(
        sessionAsyncStorageMock.setItems(
          deepEqual({
            [UserStorageKeys.Id]: USER_AUTH_STUB.id,
            [UserStorageKeys.AuthToken]: USER_AUTH_STUB.accessToken,
            [UserStorageKeys.Username]: USER_AUTH_STUB.username,
          })
        )
      ).once();
    });

    it('should return loginFailure', () => {
      const action = AuthActions.login({ payload: USER_CREDENTIALS_STUB });
      const completion = AuthActions.loginFailure({ payload: API_ERROR_RESPONSE_STUB });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-#|', {}, API_ERROR_RESPONSE_STUB);
      const expected = cold('--a|', { a: completion });
      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(authApiServiceMock.login(deepEqual(USER_CREDENTIALS_STUB))).thenReturn(response);

      expect(effects.login$).toBeObservable(expected);
    });
  });

  describe('logout$', () => {
    it('should clear storage', () => {
      const action = AuthActions.logout();

      actions$ = hot('-a-|', { a: action });

      const expected = hot('---|');

      expect(effects.logout$).toBeObservable(expected);

      verify(sessionAsyncStorageMock.removeItems(deepEqual([UserStorageKeys.AuthToken]))).once();
    });
  });

  describe('recovery$', () => {
    it('should return recoverySuccess', () => {
      const action = AuthActions.recovery({ payload: USER_SECRETS_STUB });
      const completion = AuthActions.recoverySuccess();

      actions$ = hot('-a-|', { a: action });
      const response = cold('-a|', { a: USER_AUTH_STUB });
      const expected = cold('--a|', { a: completion });
      when(authApiServiceMock.recovery(deepEqual(USER_SECRETS_STUB))).thenReturn(response);

      expect(effects.recovery$).toBeObservable(expected);
    });

    it('should return recoveryFailure', () => {
      const action = AuthActions.recovery({ payload: USER_SECRETS_STUB });
      const completion = AuthActions.recoveryFailure({ payload: API_ERROR_RESPONSE_STUB });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-#|', {}, API_ERROR_RESPONSE_STUB);
      const expected = cold('--a|', { a: completion });
      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(authApiServiceMock.recovery(deepEqual(USER_SECRETS_STUB))).thenReturn(response);

      expect(effects.recovery$).toBeObservable(expected);
    });
  });
});
