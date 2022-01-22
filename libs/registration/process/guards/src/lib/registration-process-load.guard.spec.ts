import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { RegistrationProcessFacade } from '@banx/registration/process/state';

import { RegistrationProcessLoadGuard } from './registration-process-load.guard';

// TODO: Add tests
describe('RegistrationProcessLoadGuard', () => {
  let guard: RegistrationProcessLoadGuard;
  let registrationProcessFacadeMock: RegistrationProcessFacade;
  let loaded$: ReplaySubject<boolean>;

  beforeEach(() => {
    registrationProcessFacadeMock = mock(RegistrationProcessFacade);
    loaded$ = new ReplaySubject<boolean>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [RegistrationProcessLoadGuard, providerOf(RegistrationProcessFacade, registrationProcessFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(registrationProcessFacadeMock.loaded$).thenReturn(loaded$);
    guard = TestBed.inject(RegistrationProcessLoadGuard);
  });

  it('should create an instance', () => {
    expect(guard).toBeTruthy();
  });
});
