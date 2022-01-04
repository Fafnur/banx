import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { HTTP_ERROR_STUB } from '@banx/core/api/service';
import { LoggerService } from '@banx/core/logger/service';
import { LocalAsyncStorage } from '@banx/core/storage/local';
import { providerOf } from '@banx/core/testing';
import { VisitorService } from '@banx/core/visitor/service';
import { RegistrationFormApiService } from '@banx/registration/form/api';
import {
  REGISTRATION_FORM_CREATE_STUB,
  REGISTRATION_FORM_FIELD_VALIDATE_STUB,
  REGISTRATION_FORM_STUB,
  REGISTRATION_FORM_VALIDATE_STUB,
  RegistrationFormKeys,
} from '@banx/registration/form/common';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';

import * as RegistrationFormActions from './registration-form.actions';
import { RegistrationFormEffects } from './registration-form.effects';
import { registrationFormInitialState } from './registration-form.reducer';

describe('RegistrationFormEffects', () => {
  let actions: Observable<Action>;
  let effects: RegistrationFormEffects;
  let store: MockStore;
  let registrationFormApiServiceMock: RegistrationFormApiService;
  let loggerServiceMock: LoggerService;
  let localAsyncStorageMock: LocalAsyncStorage;
  let visitorServiceMock: VisitorService;

  beforeEach(() => {
    registrationFormApiServiceMock = mock(RegistrationFormApiService);
    loggerServiceMock = mock(LoggerService);
    localAsyncStorageMock = mock(LocalAsyncStorage);
    visitorServiceMock = mock(VisitorService);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [],
        providers: [
          RegistrationFormEffects,
          provideMockActions(() => actions),
          provideMockStore({
            initialState: {
              registrationForm: registrationFormInitialState,
              registrationProcess: { processId: PROCESS_ID_STUB },
            },
          }),
          providerOf(RegistrationFormApiService, registrationFormApiServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(LocalAsyncStorage, localAsyncStorageMock),
          providerOf(VisitorService, visitorServiceMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(localAsyncStorageMock.getItem(RegistrationFormKeys.Form)).thenReturn(of(null));
    when(visitorServiceMock.getUuid()).thenReturn(REGISTRATION_FORM_CREATE_STUB.additional.visitor);

    effects = TestBed.inject(RegistrationFormEffects);
    store = TestBed.inject(MockStore);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: RegistrationFormActions.init() });
      const expected = hot('-a-|', { a: RegistrationFormActions.restore({ payload: { form: null } }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('loadForm$', () => {
    it('should return loadFormSuccess', () => {
      const action = RegistrationFormActions.loadForm();
      const completion = RegistrationFormActions.loadFormSuccess({ payload: REGISTRATION_FORM_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: REGISTRATION_FORM_STUB });
      const expected = cold('--a|', { a: completion });

      when(registrationFormApiServiceMock.load(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.loadForm$).toBeObservable(expected);
    });

    it('should return loadFormFailure', () => {
      const action = RegistrationFormActions.loadForm();
      const completion = RegistrationFormActions.loadFormFailure({ payload: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(registrationFormApiServiceMock.load(PROCESS_ID_STUB)).thenReturn(response);

      expect(effects.loadForm$).toBeObservable(expected);
    });
  });

  describe('createForm$', () => {
    it('should return createFormSuccess', () => {
      const action = RegistrationFormActions.createForm();
      const completion = RegistrationFormActions.createFormSuccess();

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: null });
      const expected = cold('--a|', { a: completion });

      store.setState({
        registrationForm: { ...registrationFormInitialState, form: REGISTRATION_FORM_CREATE_STUB.form },
        registrationProcess: { processId: PROCESS_ID_STUB },
      });

      when(registrationFormApiServiceMock.create(PROCESS_ID_STUB, anything())).thenReturn(response);

      expect(effects.createForm$).toBeObservable(expected);
    });

    it('should return createFormFailure', () => {
      const action = RegistrationFormActions.createForm();
      const completion = RegistrationFormActions.createFormFailure({ payload: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });

      store.setState({
        registrationForm: { ...registrationFormInitialState, form: REGISTRATION_FORM_CREATE_STUB.form },
        registrationProcess: { processId: PROCESS_ID_STUB },
      });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(registrationFormApiServiceMock.create(PROCESS_ID_STUB, deepEqual(REGISTRATION_FORM_CREATE_STUB))).thenReturn(response);

      expect(effects.createForm$).toBeObservable(expected);
    });
  });

  describe('validateForm$', () => {
    it('should return validateFormSuccess', () => {
      const action = RegistrationFormActions.validateForm({ payload: REGISTRATION_FORM_VALIDATE_STUB });
      const completion = RegistrationFormActions.validateFormSuccess();

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: null });
      const expected = cold('--a|', { a: completion });

      when(registrationFormApiServiceMock.validate(PROCESS_ID_STUB, deepEqual(REGISTRATION_FORM_VALIDATE_STUB))).thenReturn(response);

      expect(effects.validateForm$).toBeObservable(expected);
    });

    it('should return validateFormFailure', () => {
      const action = RegistrationFormActions.validateForm({ payload: REGISTRATION_FORM_VALIDATE_STUB });
      const completion = RegistrationFormActions.validateFormFailure({ payload: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(registrationFormApiServiceMock.validate(PROCESS_ID_STUB, deepEqual(REGISTRATION_FORM_VALIDATE_STUB))).thenReturn(response);

      expect(effects.validateForm$).toBeObservable(expected);
    });
  });

  describe('validateFormField$', () => {
    it('should return validateFormFieldSuccess', () => {
      const action = RegistrationFormActions.validateFormField({ payload: REGISTRATION_FORM_FIELD_VALIDATE_STUB });
      const completion = RegistrationFormActions.validateFormFieldSuccess({ payload: REGISTRATION_FORM_FIELD_VALIDATE_STUB.field });

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: null });
      const expected = cold('--a|', { a: completion });

      when(registrationFormApiServiceMock.validateUnique(PROCESS_ID_STUB, deepEqual(REGISTRATION_FORM_FIELD_VALIDATE_STUB))).thenReturn(
        response
      );

      expect(effects.validateFormField$).toBeObservable(expected);
    });

    it('should return validateFormFieldFailure', () => {
      const action = RegistrationFormActions.validateFormField({ payload: REGISTRATION_FORM_FIELD_VALIDATE_STUB });
      const completion = RegistrationFormActions.validateFormFieldFailure({
        payload: { response: HTTP_ERROR_STUB, field: REGISTRATION_FORM_FIELD_VALIDATE_STUB.field },
      });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });

      when(loggerServiceMock.logEffect(anything(), deepEqual(completion))).thenReturn(of(completion));
      when(registrationFormApiServiceMock.validateUnique(PROCESS_ID_STUB, deepEqual(REGISTRATION_FORM_FIELD_VALIDATE_STUB))).thenReturn(
        response
      );

      expect(effects.validateFormField$).toBeObservable(expected);
    });
  });

  describe('updateForm$', () => {
    it('should return save form', () => {
      actions = hot('-a-|', { a: RegistrationFormActions.updateForm({ payload: REGISTRATION_FORM_STUB }) });
      const expected = hot('---|');

      store.setState({
        registrationForm: { ...registrationFormInitialState, form: REGISTRATION_FORM_CREATE_STUB.form },
        registrationProcess: { processId: PROCESS_ID_STUB },
      });

      expect(effects.updateForm$).toBeObservable(expected);
      verify(localAsyncStorageMock.setItem(RegistrationFormKeys.Form, deepEqual(REGISTRATION_FORM_STUB))).once();
    });
  });
});
