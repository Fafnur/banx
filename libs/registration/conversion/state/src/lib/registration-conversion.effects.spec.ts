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
import { RegistrationConversionApiService } from '@banx/registration/conversion/api';
import { REGISTRATION_CONVERSION_STUB } from '@banx/registration/conversion/common';
import { REGISTRATION_FORM_CREATE_STUB } from '@banx/registration/form/common';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';
import { loadProcess } from '@banx/registration/process/state';

import * as RegistrationConversionActions from './registration-conversion.actions';
import { RegistrationConversionEffects } from './registration-conversion.effects';
import {
  REGISTRATION_CONVERSION_FEATURE_KEY,
  registrationConversionInitialState,
  RegistrationConversionState,
} from './registration-conversion.reducer';

describe('RegistrationConversionEffects', () => {
  let setStore: (params: Partial<RegistrationConversionState>) => void;

  let actions: Observable<Action>;
  let effects: RegistrationConversionEffects;
  let store: MockStore;
  let registrationConversionApiServiceMock: RegistrationConversionApiService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;

  beforeEach(() => {
    registrationConversionApiServiceMock = mock(RegistrationConversionApiService);
    loggerServiceMock = mock(LoggerService);
    visitorServiceMock = mock(VisitorService);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [],
        providers: [
          RegistrationConversionEffects,
          provideMockActions(() => actions),
          provideMockStore({
            initialState: { registrationProcess: { processId: PROCESS_ID_STUB } },
          }),
          providerOf(RegistrationConversionApiService, registrationConversionApiServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(VisitorService, visitorServiceMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(visitorServiceMock.getUuid()).thenReturn(REGISTRATION_FORM_CREATE_STUB.additional.visitor);

    effects = TestBed.inject(RegistrationConversionEffects);
    store = TestBed.inject(MockStore);
    setStore = createSetMockStore(store, REGISTRATION_CONVERSION_FEATURE_KEY, registrationConversionInitialState);
  });

  describe('loadConversion$', () => {
    it('should return loadConversionSuccess', () => {
      const action = RegistrationConversionActions.loadConversion();
      const completion = RegistrationConversionActions.loadConversionSuccess({ payload: REGISTRATION_CONVERSION_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: REGISTRATION_CONVERSION_STUB });
      const expected = cold('--a|', { a: completion });

      when(registrationConversionApiServiceMock.load(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.loadConversion$).toBeObservable(expected);
    });

    it('should return loadConversionFailure', () => {
      const action = RegistrationConversionActions.loadConversion();
      const completion = RegistrationConversionActions.loadConversionFailure({ payload: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(registrationConversionApiServiceMock.load(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.loadConversion$).toBeObservable(expected);
    });
  });

  describe('completeConversion$', () => {
    it('should return completeConversionSuccess', () => {
      const action = RegistrationConversionActions.completeConversion();
      const completion = RegistrationConversionActions.completeConversionSuccess();

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: null });
      const expected = cold('--a|', { a: completion });

      when(registrationConversionApiServiceMock.complete(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.completeConversion$).toBeObservable(expected);
    });

    it('should return completeConversionFailure', () => {
      const action = RegistrationConversionActions.completeConversion();
      const completion = RegistrationConversionActions.completeConversionFailure({ payload: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(registrationConversionApiServiceMock.complete(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.completeConversion$).toBeObservable(expected);
    });
  });

  describe('completeConversionSuccess$', () => {
    it('should call loadProcess()', () => {
      actions = hot('-a-|', { a: RegistrationConversionActions.completeConversionSuccess() });
      const expected = hot('-a-|', { a: loadProcess() });

      expect(effects.completeConversionSuccess$).toBeObservable(expected);
    });
  });
});
