import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { mock } from 'ts-mockito';

import { LoggerService } from '@banx/core/logger/service';
import { providerOf } from '@banx/core/testing';
import { VisitorService } from '@banx/core/visitor/service';
import { FingerprintFacade } from '@banx/fingerprints/state';
import { RegistrationDecisionApiService } from '@banx/registration/decision/api';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';

import { RegistrationDecisionEffects } from './registration-decision.effects';
import { RegistrationDecisionFacade } from './registration-decision.facade';
import { reducer, REGISTRATION_DECISION_FEATURE_KEY } from './registration-decision.reducer';

describe('RegistrationDecisionFacade', () => {
  let facade: RegistrationDecisionFacade;
  let registrationDecisionApiServiceMock: RegistrationDecisionApiService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;
  let fingerprintFacadeMock: FingerprintFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      registrationDecisionApiServiceMock = mock(RegistrationDecisionApiService);
      loggerServiceMock = mock(LoggerService);
      visitorServiceMock = mock(VisitorService);
      fingerprintFacadeMock = mock(FingerprintFacade);
    });

    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(REGISTRATION_DECISION_FEATURE_KEY, reducer),
          EffectsModule.forFeature([RegistrationDecisionEffects]),
        ],
        providers: [
          RegistrationDecisionFacade,
          providerOf(RegistrationDecisionApiService, registrationDecisionApiServiceMock),
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

      facade = TestBed.inject(RegistrationDecisionFacade);
    });

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });
  });
});
