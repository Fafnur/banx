import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { mock, verify } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { RegistrationFormFacade } from '@banx/registration/form/state';

import { RegistrationFormLayoutComponent } from './registration-form-layout.component';

describe('RegistrationFormLayoutComponent', () => {
  let fixture: ComponentFixture<RegistrationFormLayoutComponent>;
  let registrationFormFacadeMock: RegistrationFormFacade;

  beforeEach(() => {
    registrationFormFacadeMock = mock(RegistrationFormFacade);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [RegistrationFormLayoutComponent],
        providers: [providerOf(RegistrationFormFacade, registrationFormFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormLayoutComponent);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should call load form', () => {
    fixture.detectChanges();

    verify(registrationFormFacadeMock.load()).once();
  });
});
