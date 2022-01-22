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
import { RegistrationSocialApiService } from '@banx/registration/social/api';

import { RegistrationSocialEffects } from './registration-social.effects';
import { RegistrationSocialFacade } from './registration-social.facade';
import { reducer, REGISTRATION_SOCIAL_FEATURE_KEY } from './registration-social.reducer';

describe('RegistrationDataFacade', () => {
  let facade: RegistrationSocialFacade;
  let registrationSocialApiServiceMock: RegistrationSocialApiService;
  let loggerServiceMock: LoggerService;
  let visitorServiceMock: VisitorService;
  let fingerprintFacadeMock: FingerprintFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      registrationSocialApiServiceMock = mock(RegistrationSocialApiService);
      loggerServiceMock = mock(LoggerService);
      visitorServiceMock = mock(VisitorService);
      fingerprintFacadeMock = mock(FingerprintFacade);
    });

    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(REGISTRATION_SOCIAL_FEATURE_KEY, reducer), EffectsModule.forFeature([RegistrationSocialEffects])],
        providers: [
          RegistrationSocialFacade,
          providerOf(RegistrationSocialApiService, registrationSocialApiServiceMock),
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

      facade = TestBed.inject(RegistrationSocialFacade);
    });

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });
  });
});
