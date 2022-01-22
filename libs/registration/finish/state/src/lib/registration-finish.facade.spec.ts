import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { mock } from 'ts-mockito';

import { LoggerService } from '@banx/core/logger/service';
import { providerOf } from '@banx/core/testing';
import { VisitorService } from '@banx/core/visitor/service';
import { FingerprintFacade } from '@banx/fingerprints/state';
import { RegistrationFinishApiService } from '@banx/registration/finish/api';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';

import { RegistrationFinishEffects } from './registration-finish.effects';
import { RegistrationFinishFacade } from './registration-finish.facade';
import { reducer, REGISTRATION_FINISH_FEATURE_KEY } from './registration-finish.reducer';

describe('RegistrationFinishFacade', () => {
  let facade: RegistrationFinishFacade;
  let registrationFinishApiServiceMock: RegistrationFinishApiService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;
  let fingerprintFacadeMock: FingerprintFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      registrationFinishApiServiceMock = mock(RegistrationFinishApiService);
      loggerServiceMock = mock(LoggerService);
      visitorServiceMock = mock(VisitorService);
      fingerprintFacadeMock = mock(FingerprintFacade);
    });

    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(REGISTRATION_FINISH_FEATURE_KEY, reducer), EffectsModule.forFeature([RegistrationFinishEffects])],
        providers: [
          RegistrationFinishFacade,
          providerOf(RegistrationFinishApiService, registrationFinishApiServiceMock),
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

      facade = TestBed.inject(RegistrationFinishFacade);
    });

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });
  });
});
