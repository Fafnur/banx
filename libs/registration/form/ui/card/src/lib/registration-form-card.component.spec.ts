import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { mock } from 'ts-mockito';

import { FormErrorsService } from '@banx/core/forms/errors';
import { providerOf } from '@banx/core/testing';
import { RegistrationFormFacade } from '@banx/registration/form/state';
import { RegistrationProcessFacade } from '@banx/registration/process/state';
import { ButtonsModule } from '@banx/ui/buttons';

import { RegistrationFormCardComponent } from './registration-form-card.component';

describe('RegistrationFormCardComponent', () => {
  let component: RegistrationFormCardComponent;
  let fixture: ComponentFixture<RegistrationFormCardComponent>;

  let registrationFormFacadeMock: RegistrationFormFacade;
  let registrationProcessFacadeMock: RegistrationProcessFacade;
  let formErrorsServiceMock: FormErrorsService;

  beforeEach(() => {
    registrationFormFacadeMock = mock(RegistrationFormFacade);
    registrationProcessFacadeMock = mock(RegistrationProcessFacade);
    formErrorsServiceMock = mock(FormErrorsService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MockModule(MatButtonModule),
        MockModule(ButtonsModule),
      ],
      declarations: [RegistrationFormCardComponent],
      providers: [
        providerOf(FormErrorsService, formErrorsServiceMock),
        providerOf(RegistrationProcessFacade, registrationProcessFacadeMock),
        providerOf(RegistrationFormFacade, registrationFormFacadeMock),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
