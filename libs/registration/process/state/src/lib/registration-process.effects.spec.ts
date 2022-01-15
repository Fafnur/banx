import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { API_ERROR_RESPONSE_STUB } from '@banx/core/api/service';
import { LoggerService } from '@banx/core/logger/service';
import { NAVIGATION_PATHS } from '@banx/core/navigation/common';
import { NavigationService } from '@banx/core/navigation/service';
import { LocalAsyncStorage } from '@banx/core/storage/local';
import { createEntityState, createSetMockStore } from '@banx/core/store/utils';
import { providerOf } from '@banx/core/testing';
import { RegistrationProcessApiService } from '@banx/registration/process/api';
import {
  PROCESS_ID_STUB,
  REGISTRATION_PROCESS_STUB,
  REGISTRATION_STEP_DTO_STUB,
  REGISTRATION_STEP_STUB,
  RegistrationProcessKeys,
} from '@banx/registration/process/common';

import * as RegistrationProcessActions from './registration-process.actions';
import { RegistrationProcessEffects } from './registration-process.effects';
import {
  REGISTRATION_PROCESS_FEATURE_KEY,
  registrationProcessInitialState,
  RegistrationProcessPartialState,
  RegistrationProcessState,
} from './registration-process.reducer';

describe('RegistrationProcessEffects', () => {
  let setStore: (params: Partial<RegistrationProcessState>) => void;

  let actions: Observable<any>;
  let effects: RegistrationProcessEffects;
  let store: MockStore<RegistrationProcessPartialState>;
  let registrationProcessApiServiceMock: RegistrationProcessApiService;
  let loggerServiceMock: LoggerService;
  let localAsyncStorageMock: LocalAsyncStorage;
  let navigationServiceMock: NavigationService;

  beforeEach(() => {
    registrationProcessApiServiceMock = mock(RegistrationProcessApiService);
    loggerServiceMock = mock(LoggerService);
    localAsyncStorageMock = mock(LocalAsyncStorage);
    navigationServiceMock = mock(NavigationService);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        providers: [
          RegistrationProcessEffects,
          provideMockActions(() => actions),
          provideMockStore({
            initialState: { [REGISTRATION_PROCESS_FEATURE_KEY]: registrationProcessInitialState },
          }),
          providerOf(RegistrationProcessApiService, registrationProcessApiServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(LocalAsyncStorage, localAsyncStorageMock),
          providerOf(NavigationService, navigationServiceMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(localAsyncStorageMock.getItems(anything())).thenReturn(of([null, null, null]));
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);

    effects = TestBed.inject(RegistrationProcessEffects);
    store = TestBed.inject(MockStore);
    setStore = createSetMockStore(store, REGISTRATION_PROCESS_FEATURE_KEY, registrationProcessInitialState);
  });

  describe('init$', () => {
    it('should return restore', () => {
      const action = RegistrationProcessActions.init();
      const completion = RegistrationProcessActions.restore({ payload: { processId: null, subStep: null, selected: null } });

      actions = hot('-a-|', { a: action });
      const expected = cold('-a-|', { a: completion });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('loadProcess$', () => {
    it('should return loadProcessSuccess', () => {
      const action = RegistrationProcessActions.loadProcess();
      const completion = RegistrationProcessActions.loadProcessSuccess({ payload: REGISTRATION_PROCESS_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: REGISTRATION_PROCESS_STUB });
      const expected = cold('--a|', { a: completion });
      setStore({ processId: PROCESS_ID_STUB });
      when(registrationProcessApiServiceMock.load(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.loadProcess$).toBeObservable(expected);
    });

    it('should return loadProcessFailure', () => {
      const action = RegistrationProcessActions.loadProcess();
      const completion = RegistrationProcessActions.loadProcessFailure({ payload: API_ERROR_RESPONSE_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, API_ERROR_RESPONSE_STUB);
      const expected = cold('--a|', { a: completion });
      setStore({ processId: PROCESS_ID_STUB });
      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(registrationProcessApiServiceMock.load(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.loadProcess$).toBeObservable(expected);
    });
  });

  describe('loadStepsSuccess$', () => {
    it('should return selectStep', () => {
      const action = RegistrationProcessActions.loadProcessSuccess({ payload: REGISTRATION_PROCESS_STUB });
      const completion = RegistrationProcessActions.selectStep();

      actions = hot('-a-|', { a: action });
      const expected = cold('-a-|', { a: completion });

      expect(effects.loadProcessSuccess$).toBeObservable(expected);
    });
  });

  describe('selectStep$', () => {
    it('should return selectStepSuccess', () => {
      setStore(createEntityState([REGISTRATION_STEP_DTO_STUB]));
      const action = RegistrationProcessActions.selectStep();
      const completion = RegistrationProcessActions.selectStepSuccess({
        payload: { step: REGISTRATION_STEP_STUB, subStep: 'personal' },
      });

      actions = hot('-a-|', { a: action });
      const expected = cold('-a-|', { a: completion });

      expect(effects.selectStep$).toBeObservable(expected);
    });
  });

  describe('selectSubStep$', () => {
    it('should return selectSubStepSuccess', () => {
      setStore({ ...createEntityState([REGISTRATION_STEP_DTO_STUB]), subStep: 'personal' });
      const action = RegistrationProcessActions.selectSubStep({ payload: 'next' });
      const completion = RegistrationProcessActions.selectSubStepSuccess({
        payload: { step: REGISTRATION_STEP_STUB, subStep: 'sms' },
      });

      actions = hot('-a-|', { a: action });
      const expected = cold('-a-|', { a: completion });

      expect(effects.selectSubStep$).toBeObservable(expected);
    });
  });

  describe('selectStepSuccess$', () => {
    it('should return save steps', () => {
      const action = RegistrationProcessActions.selectStepSuccess({ payload: { step: REGISTRATION_STEP_STUB, subStep: 'personal' } });

      actions = hot('-a-|', { a: action });
      const expected = cold('---|');
      expect(effects.selectStepSuccess$).toBeObservable(expected);

      verify(
        localAsyncStorageMock.setItems(
          deepEqual({
            [RegistrationProcessKeys.SelectedStepId]: REGISTRATION_STEP_STUB.id,
            [RegistrationProcessKeys.SelectedSubStep]: 'personal',
          })
        )
      ).once();
      // verify(navigationServiceMock.navigateByUrl(anything())).once();
    });
  });
});
