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
import { RegistrationDecisionApiService } from '@banx/registration/decision/api';
import { REGISTRATION_FORM_CREATE_STUB } from '@banx/registration/form/common';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';
import { loadProcess } from '@banx/registration/process/state';

import * as RegistrationDecisionActions from './registration-decision.actions';
import { RegistrationDecisionEffects } from './registration-decision.effects';
import {
  REGISTRATION_DECISION_FEATURE_KEY,
  registrationDecisionInitialState,
  RegistrationDecisionState,
} from './registration-decision.reducer';

describe('RegistrationDecisionEffects', () => {
  let setStore: (params: Partial<RegistrationDecisionState>) => void;

  let actions: Observable<Action>;
  let effects: RegistrationDecisionEffects;
  let store: MockStore;
  let registrationDecisionApiServiceMock: RegistrationDecisionApiService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;

  beforeEach(() => {
    registrationDecisionApiServiceMock = mock(RegistrationDecisionApiService);
    loggerServiceMock = mock(LoggerService);
    visitorServiceMock = mock(VisitorService);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [],
        providers: [
          RegistrationDecisionEffects,
          provideMockActions(() => actions),
          provideMockStore({
            initialState: { registrationProcess: { processId: PROCESS_ID_STUB } },
          }),
          providerOf(RegistrationDecisionApiService, registrationDecisionApiServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(VisitorService, visitorServiceMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(visitorServiceMock.getUuid()).thenReturn(REGISTRATION_FORM_CREATE_STUB.additional.visitor);

    effects = TestBed.inject(RegistrationDecisionEffects);
    store = TestBed.inject(MockStore);
    setStore = createSetMockStore(store, REGISTRATION_DECISION_FEATURE_KEY, registrationDecisionInitialState);
  });

  describe('makeDecision$', () => {
    it('should return createUserSuccess', () => {
      const action = RegistrationDecisionActions.makeDecision();
      const completion = RegistrationDecisionActions.makeDecisionSuccess();

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: null });
      const expected = cold('--a|', { a: completion });

      when(registrationDecisionApiServiceMock.makeDecision(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.makeDecision$).toBeObservable(expected);
    });

    it('should return createUserFailure', () => {
      const action = RegistrationDecisionActions.makeDecision();
      const completion = RegistrationDecisionActions.makeDecisionFailure({ payload: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(registrationDecisionApiServiceMock.makeDecision(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.makeDecision$).toBeObservable(expected);
    });
  });

  describe('makeDecisionSuccess$', () => {
    it('should call loadProcess()', () => {
      actions = hot('-a-|', { a: RegistrationDecisionActions.makeDecisionSuccess() });
      const expected = hot('-a-|', { a: loadProcess() });

      expect(effects.makeDecisionSuccess$).toBeObservable(expected);
    });
  });
});
