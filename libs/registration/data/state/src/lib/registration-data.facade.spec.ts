import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { mock } from 'ts-mockito';

import { LoggerService } from '@banx/core/logger/service';
import { providerOf } from '@banx/core/testing';
import { VisitorService } from '@banx/core/visitor/service';
import { FingerprintFacade } from '@banx/fingerprints/state';
import { RegistrationDataApiService } from '@banx/registration/data/api';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';

import { RegistrationDataEffects } from './registration-data.effects';
import { RegistrationDataFacade } from './registration-data.facade';
import { reducer, REGISTRATION_DATA_FEATURE_KEY } from './registration-data.reducer';

describe('RegistrationDataFacade', () => {
  let facade: RegistrationDataFacade;
  let registrationDataApiServiceMock: RegistrationDataApiService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;
  let fingerprintFacadeMock: FingerprintFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      registrationDataApiServiceMock = mock(RegistrationDataApiService);
      loggerServiceMock = mock(LoggerService);
      visitorServiceMock = mock(VisitorService);
      fingerprintFacadeMock = mock(FingerprintFacade);
    });

    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(REGISTRATION_DATA_FEATURE_KEY, reducer), EffectsModule.forFeature([RegistrationDataEffects])],
        providers: [
          RegistrationDataFacade,
          providerOf(RegistrationDataApiService, registrationDataApiServiceMock),
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

      facade = TestBed.inject(RegistrationDataFacade);
    });

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });
  });
});
