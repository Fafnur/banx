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
import { RegistrationFinishApiService } from '@banx/registration/finish/api';
import { REGISTRATION_FORM_CREATE_STUB } from '@banx/registration/form/common';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';
import { loadProcess } from '@banx/registration/process/state';

import * as RegistrationUserActions from './registration-finish.actions';
import { RegistrationFinishEffects } from './registration-finish.effects';
import { REGISTRATION_FINISH_FEATURE_KEY, registrationFinishInitialState, RegistrationFinishState } from './registration-finish.reducer';

describe('RegistrationFinishEffects', () => {
  let setStore: (params: Partial<RegistrationFinishState>) => void;

  let actions: Observable<Action>;
  let effects: RegistrationFinishEffects;
  let store: MockStore;
  let registrationFinishApiServiceMock: RegistrationFinishApiService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;

  beforeEach(() => {
    registrationFinishApiServiceMock = mock(RegistrationFinishApiService);
    loggerServiceMock = mock(LoggerService);
    visitorServiceMock = mock(VisitorService);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [],
        providers: [
          RegistrationFinishEffects,
          provideMockActions(() => actions),
          provideMockStore({
            initialState: { registrationProcess: { processId: PROCESS_ID_STUB } },
          }),
          providerOf(RegistrationFinishApiService, registrationFinishApiServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(VisitorService, visitorServiceMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(visitorServiceMock.getUuid()).thenReturn(REGISTRATION_FORM_CREATE_STUB.additional.visitor);

    effects = TestBed.inject(RegistrationFinishEffects);
    store = TestBed.inject(MockStore);
    setStore = createSetMockStore(store, REGISTRATION_FINISH_FEATURE_KEY, registrationFinishInitialState);
  });

  describe('finishRegistration$', () => {
    it('should return finishRegistrationSuccess', () => {
      const action = RegistrationUserActions.finishRegistration();
      const completion = RegistrationUserActions.finishRegistrationSuccess();

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: null });
      const expected = cold('--a|', { a: completion });

      when(registrationFinishApiServiceMock.finish(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.finishRegistration$).toBeObservable(expected);
    });

    it('should return finishRegistrationFailure', () => {
      const action = RegistrationUserActions.finishRegistration();
      const completion = RegistrationUserActions.finishRegistrationFailure({ payload: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(registrationFinishApiServiceMock.finish(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.finishRegistration$).toBeObservable(expected);
    });
  });

  describe('finishRegistrationSuccess$', () => {
    it('should call loadProcess()', () => {
      actions = hot('-a-|', { a: RegistrationUserActions.finishRegistrationSuccess() });
      const expected = hot('-a-|', { a: loadProcess() });

      expect(effects.finishRegistrationSuccess$).toBeObservable(expected);
    });
  });
});
