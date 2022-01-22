import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { mock } from 'ts-mockito';

import { NavigationService } from '@banx/core/navigation/service';
import { providerOf } from '@banx/core/testing';
import { RegistrationFormFacade } from '@banx/registration/form/state';
import { RegistrationProcessFacade } from '@banx/registration/process/state';

import { RegistrationFormGuard } from './registration-form.guard';

// TODO: Add tests
describe('RegistrationFormGuard', () => {
  let guard: RegistrationFormGuard;
  let registrationFormFacadeMock: RegistrationFormFacade;
  let navigationServiceMock: NavigationService;
  let registrationProcessFacadeMock: RegistrationProcessFacade;

  beforeEach(() => {
    registrationFormFacadeMock = mock(RegistrationFormFacade);
    navigationServiceMock = mock(NavigationService);
    registrationProcessFacadeMock = mock(RegistrationProcessFacade);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [
          RegistrationFormGuard,
          providerOf(RegistrationFormFacade, registrationFormFacadeMock),
          providerOf(NavigationService, navigationServiceMock),
          providerOf(RegistrationProcessFacade, registrationProcessFacadeMock),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    guard = TestBed.inject(RegistrationFormGuard);
  });

  it('should create an instance', () => {
    expect(guard).toBeTruthy();
  });
});
