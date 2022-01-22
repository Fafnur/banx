import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';
import { of } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { LoggerService } from '@banx/core/logger/service';
import { NAVIGATION_PATHS } from '@banx/core/navigation/common';
import { NavigationService } from '@banx/core/navigation/service';
import { LocalAsyncStorage } from '@banx/core/storage/local';
import { providerOf } from '@banx/core/testing';
import { RegistrationProcessApiService } from '@banx/registration/process/api';
import { REGISTRATION_PROCESS_STUB } from '@banx/registration/process/common';

import { RegistrationProcessEffects } from './registration-process.effects';
import { RegistrationProcessFacade } from './registration-process.facade';
import { reducer, REGISTRATION_PROCESS_FEATURE_KEY } from './registration-process.reducer';

describe('RegistrationProcessFacade', () => {
  let facade: RegistrationProcessFacade;
  let registrationProcessApiServiceMock: RegistrationProcessApiService;
  let loggerServiceMock: LoggerService;
  let localAsyncStorageMock: LocalAsyncStorage;
  let navigationServiceMock: NavigationService;

  describe('used in NgModule', () => {
    beforeEach(() => {
      registrationProcessApiServiceMock = mock(RegistrationProcessApiService);
      loggerServiceMock = mock(LoggerService);
      localAsyncStorageMock = mock(LocalAsyncStorage);
      navigationServiceMock = mock(NavigationService);
    });

    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(REGISTRATION_PROCESS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([RegistrationProcessEffects]),
        ],
        providers: [
          RegistrationProcessFacade,
          providerOf(RegistrationProcessApiService, registrationProcessApiServiceMock),
          providerOf(LoggerService, loggerServiceMock),
          providerOf(LocalAsyncStorage, localAsyncStorageMock),
          providerOf(NavigationService, navigationServiceMock),
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}

      TestBed.configureTestingModule({ imports: [RootModule] });

      when(localAsyncStorageMock.getItems(anything())).thenReturn(of([null, null, null]));
      when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);

      facade = TestBed.inject(RegistrationProcessFacade);
    });

    it('load() should return the loaded steps', async () => {
      let steps = await readFirst(facade.steps$);
      expect(steps.length).toBe(0);

      when(registrationProcessApiServiceMock.load(anything())).thenReturn(of(REGISTRATION_PROCESS_STUB));

      facade.load();

      steps = await readFirst(facade.steps$);
      expect(steps.length).toBe(1);
    });
  });
});
