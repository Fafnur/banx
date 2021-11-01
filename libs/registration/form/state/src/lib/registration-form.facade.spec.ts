import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';
import { of } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { LoggerService } from '@banx/core/logger/service';
import { LocalAsyncStorage } from '@banx/core/storage/local';
import { providerOf } from '@banx/core/testing';
import { VisitorService } from '@banx/core/visitor/service';
import { RegistrationFormApiService } from '@banx/registration/form/api';
import { REGISTRATION_FORM_CREATE_STUB, REGISTRATION_FORM_STUB, RegistrationFormKeys } from '@banx/registration/form/common';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';

import { RegistrationFormEffects } from './registration-form.effects';
import { RegistrationFormFacade } from './registration-form.facade';
import { reducer, REGISTRATION_FORM_FEATURE_KEY } from './registration-form.reducer';

describe('RegistrationFormFacade', () => {
  let facade: RegistrationFormFacade;
  let registrationFormApiServiceMock: RegistrationFormApiService;
  let loggerServiceMock: LoggerService;
  let localAsyncStorageMock: LocalAsyncStorage;
  let visitorServiceMock: VisitorService;

  describe('used in NgModule', () => {
    beforeEach(() => {
      registrationFormApiServiceMock = mock(RegistrationFormApiService);
      loggerServiceMock = mock(LoggerService);
      localAsyncStorageMock = mock(LocalAsyncStorage);
      visitorServiceMock = mock(VisitorService);
    });

    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(REGISTRATION_FORM_FEATURE_KEY, reducer), EffectsModule.forFeature([RegistrationFormEffects])],
        providers: [
          RegistrationFormFacade,
          providerOf(RegistrationFormApiService, registrationFormApiServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(LocalAsyncStorage, localAsyncStorageMock),
          providerOf(VisitorService, visitorServiceMock),
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot(
            {
              registrationProcess: () => ({
                processId: PROCESS_ID_STUB,
              }),
            },
            {
              initialState: {
                registrationProcess: {
                  processId: PROCESS_ID_STUB,
                },
              },
            }
          ),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });
    });

    beforeEach(() => {
      when(localAsyncStorageMock.getItem(RegistrationFormKeys.Form)).thenReturn(of(null));
      when(visitorServiceMock.getUuid()).thenReturn(REGISTRATION_FORM_CREATE_STUB.additional.visitor);

      facade = TestBed.inject(RegistrationFormFacade);
    });

    it('loadAll() should return empty list with loaded == true', async () => {
      when(registrationFormApiServiceMock.load(anything())).thenReturn(of(REGISTRATION_FORM_STUB));

      let form = await readFirst(facade.form$);
      let formLoaded = await readFirst(facade.formLoaded$);

      expect(form).toBeNull();
      expect(formLoaded).toBeFalsy();

      facade.load();

      form = await readFirst(facade.form$);
      formLoaded = await readFirst(facade.formLoaded$);

      expect(form).toEqual(REGISTRATION_FORM_STUB);
      expect(formLoaded).toBeTruthy();
    });
  });
});
