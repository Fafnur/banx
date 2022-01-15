import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { mock } from 'ts-mockito';

import { NavigationService } from '@banx/core/navigation/service';
import { providerOf } from '@banx/core/testing';
import { RegistrationProcessFacade } from '@banx/registration/process/state';

import { RegistrationProcessGuard } from './registration-process.guard';

// TODO: Add tests
describe('RegistrationProcessGuard', () => {
  let guard: RegistrationProcessGuard;
  let registrationProcessFacadeMock: RegistrationProcessFacade;
  let navigationServiceMock: NavigationService;

  beforeEach(() => {
    registrationProcessFacadeMock = mock(RegistrationProcessFacade);
    navigationServiceMock = mock(NavigationService);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [
          RegistrationProcessGuard,
          providerOf(RegistrationProcessFacade, registrationProcessFacadeMock),
          providerOf(NavigationService, navigationServiceMock),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    guard = TestBed.inject(RegistrationProcessGuard);
  });

  it('should create an instance', () => {
    expect(guard).toBeTruthy();
  });
});
