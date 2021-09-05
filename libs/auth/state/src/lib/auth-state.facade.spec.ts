import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';
import { of } from 'rxjs';
import { deepEqual, mock, verify, when } from 'ts-mockito';

import { AuthApiService } from '@banx/auth/api';
import { LoggerService } from '@banx/core/logger/service';
import { SessionAsyncStorage } from '@banx/core/storage/session';
import { providerOf } from '@banx/core/testing';
import { USER_AUTH_STUB, USER_CREDENTIALS_STUB, USER_SECRETS_STUB, UserStorageKeys } from '@banx/users/common';

import * as AuthActions from './auth-state.actions';
import { AuthStateEffects } from './auth-state.effects';
import { AuthStateFacade } from './auth-state.facade';
import { AUTH_FEATURE_KEY, AuthPartialState, reducer } from './auth-state.reducer';

describe('AuthFacade', () => {
  let facade: AuthStateFacade;
  let authApiServiceMock: AuthApiService;
  let loggerServiceMock: LoggerService;
  let sessionAsyncStorageMock: SessionAsyncStorage;
  let store: Store<AuthPartialState>;

  describe('used in NgModule', () => {
    beforeEach(() => {
      authApiServiceMock = mock(AuthApiService);
      loggerServiceMock = mock(LoggerService);
      sessionAsyncStorageMock = mock(SessionAsyncStorage);

      when(sessionAsyncStorageMock.getItem(UserStorageKeys.AuthToken)).thenReturn(of(null));
    });

    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(AUTH_FEATURE_KEY, reducer), EffectsModule.forFeature([AuthStateEffects])],
        providers: [
          AuthStateFacade,
          providerOf(AuthApiService, authApiServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(SessionAsyncStorage, sessionAsyncStorageMock),
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      facade = TestBed.inject(AuthStateFacade);
      store = TestBed.inject(Store);
    });

    it('login() should login', async () => {
      let logged = await readFirst(facade.logged$);
      expect(logged).toBeFalsy();

      when(authApiServiceMock.login(deepEqual(USER_CREDENTIALS_STUB))).thenReturn(of(USER_AUTH_STUB));
      facade.login(USER_CREDENTIALS_STUB);

      logged = await readFirst(facade.logged$);
      expect(logged).toBeTruthy();
    });

    it('logout() should set logged false', async () => {
      store.dispatch(AuthActions.loginSuccess({ payload: USER_AUTH_STUB }));

      let logged = await readFirst(facade.logged$);
      expect(logged).toBeTruthy();

      facade.logout();

      logged = await readFirst(facade.logged$);
      expect(logged).toBeFalsy();
    });

    it('recovery() should recovery', async () => {
      when(authApiServiceMock.recovery(deepEqual(USER_SECRETS_STUB))).thenReturn(of(undefined));

      facade.recovery(USER_SECRETS_STUB);

      verify(authApiServiceMock.recovery(deepEqual(USER_SECRETS_STUB))).once();
    });
  });
});
