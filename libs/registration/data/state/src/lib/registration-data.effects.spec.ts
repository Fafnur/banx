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
import { RegistrationDataApiService } from '@banx/registration/data/api';
import { REGISTRATION_FORM_CREATE_STUB } from '@banx/registration/form/common';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';
import { navigateToNextStep } from '@banx/registration/process/state';

import * as RegistrationDataActions from './registration-data.actions';
import { RegistrationDataEffects } from './registration-data.effects';
import { REGISTRATION_DATA_FEATURE_KEY, registrationDataInitialState, RegistrationDataState } from './registration-data.reducer';

describe('RegistrationDataEffects', () => {
  let setStore: (params: Partial<RegistrationDataState>) => void;

  let actions: Observable<Action>;
  let effects: RegistrationDataEffects;
  let store: MockStore;
  let registrationDataApiServiceMock: RegistrationDataApiService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;

  beforeEach(() => {
    registrationDataApiServiceMock = mock(RegistrationDataApiService);
    loggerServiceMock = mock(LoggerService);
    visitorServiceMock = mock(VisitorService);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [],
        providers: [
          RegistrationDataEffects,
          provideMockActions(() => actions),
          provideMockStore({
            initialState: { registrationProcess: { processId: PROCESS_ID_STUB } },
          }),
          providerOf(RegistrationDataApiService, registrationDataApiServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(VisitorService, visitorServiceMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(visitorServiceMock.getUuid()).thenReturn(REGISTRATION_FORM_CREATE_STUB.additional.visitor);

    effects = TestBed.inject(RegistrationDataEffects);
    store = TestBed.inject(MockStore);
    setStore = createSetMockStore(store, REGISTRATION_DATA_FEATURE_KEY, registrationDataInitialState);
  });

  describe('finishData$', () => {
    it('should return finishDataSuccess', () => {
      const action = RegistrationDataActions.finishData();
      const completion = RegistrationDataActions.finishDataSuccess();

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: null });
      const expected = cold('--a|', { a: completion });

      when(registrationDataApiServiceMock.finish(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.finishData$).toBeObservable(expected);
    });

    it('should return finishDataFailure', () => {
      const action = RegistrationDataActions.finishData();
      const completion = RegistrationDataActions.finishDataFailure({ payload: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(registrationDataApiServiceMock.finish(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.finishData$).toBeObservable(expected);
    });
  });

  describe('finishDataSuccess$', () => {
    it('should call loadProcess()', () => {
      actions = hot('-a-|', { a: RegistrationDataActions.finishDataSuccess() });
      const expected = hot('-a-|', { a: navigateToNextStep() });

      expect(effects.finishDataSuccess$).toBeObservable(expected);
    });
  });
});
