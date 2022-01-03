import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormCardModule } from '@banx/registration/form/ui/card';
import {
  RegistrationDriverLicenseModule,
  RegistrationMinimalDesiredAmountModule,
  RegistrationOwnCarModule,
} from '@banx/registration/form/ui/fields';

import { RegistrationFormAdditionalPageComponent } from './registration-form-additional-page.component';

describe('RegistrationFormAdditionalPageComponent', () => {
  let component: RegistrationFormAdditionalPageComponent;
  let fixture: ComponentFixture<RegistrationFormAdditionalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MockModule(FormsSharedModule),
        MockModule(RegistrationFormCardModule),
        MockModule(RegistrationMinimalDesiredAmountModule),
        MockModule(RegistrationOwnCarModule),
        MockModule(RegistrationDriverLicenseModule),
      ],
      declarations: [RegistrationFormAdditionalPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormAdditionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
