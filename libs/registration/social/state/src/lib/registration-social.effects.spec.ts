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
import { loadProcess } from '@banx/registration/process/state';
import { RegistrationSocialApiService } from '@banx/registration/social/api';

import * as RegistrationDataActions from './registration-social.actions';
import { RegistrationSocialEffects } from './registration-social.effects';
import { REGISTRATION_SOCIAL_FEATURE_KEY, registrationSocialInitialState, RegistrationSocialState } from './registration-social.reducer';

describe('RegistrationSocialEffects', () => {
  let setStore: (params: Partial<RegistrationSocialState>) => void;

  let actions: Observable<Action>;
  let effects: RegistrationSocialEffects;
  let store: MockStore;
  let registrationSocialApiServiceMock: RegistrationSocialApiService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;

  beforeEach(() => {
    registrationSocialApiServiceMock = mock(RegistrationSocialApiService);
    loggerServiceMock = mock(LoggerService);
    visitorServiceMock = mock(VisitorService);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [],
        providers: [
          RegistrationSocialEffects,
          provideMockActions(() => actions),
          provideMockStore({
            initialState: { registrationProcess: { processId: PROCESS_ID_STUB } },
          }),
          providerOf(RegistrationSocialApiService, registrationSocialApiServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(VisitorService, visitorServiceMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(visitorServiceMock.getUuid()).thenReturn(REGISTRATION_FORM_CREATE_STUB.additional.visitor);

    effects = TestBed.inject(RegistrationSocialEffects);
    store = TestBed.inject(MockStore);
    setStore = createSetMockStore(store, REGISTRATION_SOCIAL_FEATURE_KEY, registrationSocialInitialState);
  });

  describe('finishData$', () => {
    it('should return finishDataSuccess', () => {
      const action = RegistrationDataActions.finishSocial();
      const completion = RegistrationDataActions.finishSocialSuccess();

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: null });
      const expected = cold('--a|', { a: completion });

      when(registrationSocialApiServiceMock.finish(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.finishData$).toBeObservable(expected);
    });

    it('should return finishDataFailure', () => {
      const action = RegistrationDataActions.finishSocial();
      const completion = RegistrationDataActions.finishSocialFailure({ payload: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(registrationSocialApiServiceMock.finish(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.finishData$).toBeObservable(expected);
    });
  });

  describe('finishDataSuccess$', () => {
    it('should call loadProcess()', () => {
      actions = hot('-a-|', { a: RegistrationDataActions.finishSocialSuccess() });
      const expected = hot('-a-|', { a: loadProcess() });

      expect(effects.finishDataSuccess$).toBeObservable(expected);
    });
  });
});
