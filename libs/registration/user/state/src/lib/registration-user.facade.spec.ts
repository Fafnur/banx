import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { mock } from 'ts-mockito';

import { LoggerService } from '@banx/core/logger/service';
import { providerOf } from '@banx/core/testing';
import { VisitorService } from '@banx/core/visitor/service';
import { FingerprintFacade } from '@banx/fingerprints/state';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';
import { RegistrationUserApiService } from '@banx/registration/user/api';

import { RegistrationUserEffects } from './registration-user.effects';
import { RegistrationUserFacade } from './registration-user.facade';
import { reducer, REGISTRATION_USER_FEATURE_KEY } from './registration-user.reducer';

describe('RegistrationDataFacade', () => {
  let facade: RegistrationUserFacade;
  let registrationUserApiServiceMock: RegistrationUserApiService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;
  let fingerprintFacadeMock: FingerprintFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      registrationUserApiServiceMock = mock(RegistrationUserApiService);
      loggerServiceMock = mock(LoggerService);
      visitorServiceMock = mock(VisitorService);
      fingerprintFacadeMock = mock(FingerprintFacade);
    });

    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(REGISTRATION_USER_FEATURE_KEY, reducer), EffectsModule.forFeature([RegistrationUserEffects])],
        providers: [
          RegistrationUserFacade,
          providerOf(RegistrationUserApiService, registrationUserApiServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(VisitorService, visitorServiceMock),
          providerOf(FingerprintFacade, fingerprintFacadeMock),
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot(
            { registrationProcess: (state: any) => state },
            { initialState: { registrationProcess: { processId: PROCESS_ID_STUB } } }
          ),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      facade = TestBed.inject(RegistrationUserFacade);
    });

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });
  });
});
