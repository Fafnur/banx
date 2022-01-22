import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { anything, deepEqual, mock, when } from 'ts-mockito';

import { HTTP_ERROR_STUB } from '@banx/core/api/service';
import { LoggerService } from '@banx/core/logger/service';
import { createSetMockStore } from '@banx/core/store/utils';
import { providerOf } from '@banx/core/testing';
import { VisitorService } from '@banx/core/visitor/service';
import { REGISTRATION_FORM_CREATE_STUB } from '@banx/registration/form/common';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';
import { navigateToNextStep } from '@banx/registration/process/state';
import { RegistrationUserApiService } from '@banx/registration/user/api';

import * as RegistrationUserActions from './registration-user.actions';
import { RegistrationUserEffects } from './registration-user.effects';
import { REGISTRATION_USER_FEATURE_KEY, registrationUserInitialState, RegistrationUserState } from './registration-user.reducer';

describe('RegistrationUserEffects', () => {
  let setStore: (params: Partial<RegistrationUserState>) => void;

  let actions: Observable<Action>;
  let effects: RegistrationUserEffects;
  let store: MockStore;
  let registrationUserApiServiceMock: RegistrationUserApiService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;

  beforeEach(() => {
    registrationUserApiServiceMock = mock(RegistrationUserApiService);
    loggerServiceMock = mock(LoggerService);
    visitorServiceMock = mock(VisitorService);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [],
        providers: [
          RegistrationUserEffects,
          provideMockActions(() => actions),
          provideMockStore({
            initialState: { registrationProcess: { processId: PROCESS_ID_STUB } },
          }),
          providerOf(RegistrationUserApiService, registrationUserApiServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(VisitorService, visitorServiceMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(visitorServiceMock.getUuid()).thenReturn(REGISTRATION_FORM_CREATE_STUB.additional.visitor);

    effects = TestBed.inject(RegistrationUserEffects);
    store = TestBed.inject(MockStore);
    setStore = createSetMockStore(store, REGISTRATION_USER_FEATURE_KEY, registrationUserInitialState);
  });

  describe('createUser$', () => {
    it('should return createUserSuccess', () => {
      const action = RegistrationUserActions.createUser();
      const completion = RegistrationUserActions.createUserSuccess();

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: null });
      const expected = cold('--a|', { a: completion });

      when(registrationUserApiServiceMock.create(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.createUser$).toBeObservable(expected);
    });

    it('should return createUserFailure', () => {
      const action = RegistrationUserActions.createUser();
      const completion = RegistrationUserActions.createUserFailure({ payload: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(registrationUserApiServiceMock.create(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.createUser$).toBeObservable(expected);
    });
  });

  describe('createUserSuccess$', () => {
    it('should call loadProcess()', () => {
      actions = hot('-a-|', { a: RegistrationUserActions.createUserSuccess() });
      const expected = hot('-a-|', { a: navigateToNextStep() });

      expect(effects.createUserSuccess$).toBeObservable(expected);
    });
  });
});
