import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormCardModule } from '@banx/registration/form/ui/card';
import {
  RegistrationAgreementModule,
  RegistrationBirthdateModule,
  RegistrationEmailModule,
  RegistrationFirstNameModule,
  RegistrationGenderModule,
  RegistrationLastNameModule,
  RegistrationMiddleNameModule,
  RegistrationMobilePhoneModule,
} from '@banx/registration/form/ui/fields';
import { GridModule } from '@banx/ui/grid';

import { RegistrationFormPersonalPageComponent } from './registration-form-personal-page.component';

describe('RegistrationFormPersonalPageComponent', () => {
  let component: RegistrationFormPersonalPageComponent;
  let fixture: ComponentFixture<RegistrationFormPersonalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CommonModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MockModule(FormsSharedModule),
        MockModule(RegistrationLastNameModule),
        MockModule(RegistrationFirstNameModule),
        MockModule(RegistrationMiddleNameModule),
        MockModule(RegistrationBirthdateModule),
        MockModule(RegistrationGenderModule),
        MockModule(RegistrationFormCardModule),
        MockModule(RegistrationAgreementModule),
        MockModule(RegistrationMobilePhoneModule),
        MockModule(RegistrationEmailModule),
        MockModule(GridModule),
      ],
      declarations: [RegistrationFormPersonalPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormPersonalPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
