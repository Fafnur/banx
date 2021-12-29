import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { mock } from 'ts-mockito';

import { LoggerService } from '@banx/core/logger/service';
import { providerOf } from '@banx/core/testing';
import { VisitorService } from '@banx/core/visitor/service';
import { FingerprintFacade } from '@banx/fingerprints/state';
import { RegistrationConversionApiService } from '@banx/registration/conversion/api';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';

import { RegistrationConversionEffects } from './registration-conversion.effects';
import { RegistrationConversionFacade } from './registration-conversion.facade';
import { reducer, REGISTRATION_CONVERSION_FEATURE_KEY } from './registration-conversion.reducer';

describe('RegistrationConversionFacade', () => {
  let facade: RegistrationConversionFacade;
  let registrationConversionApiServiceMock: RegistrationConversionApiService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;
  let fingerprintFacadeMock: FingerprintFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      registrationConversionApiServiceMock = mock(RegistrationConversionApiService);
      loggerServiceMock = mock(LoggerService);
      visitorServiceMock = mock(VisitorService);
      fingerprintFacadeMock = mock(FingerprintFacade);
    });

    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(REGISTRATION_CONVERSION_FEATURE_KEY, reducer),
          EffectsModule.forFeature([RegistrationConversionEffects]),
        ],
        providers: [
          RegistrationConversionFacade,
          providerOf(RegistrationConversionApiService, registrationConversionApiServiceMock),
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

      facade = TestBed.inject(RegistrationConversionFacade);
    });

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });
  });
});
