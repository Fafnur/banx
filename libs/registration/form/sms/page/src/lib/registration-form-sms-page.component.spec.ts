import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormCardModule } from '@banx/registration/form/ui/card';
import { RegistrationSmsCodeModule } from '@banx/registration/form/ui/fields';
import { GridModule } from '@banx/ui/grid';

import { RegistrationFormSmsPageComponent } from './registration-form-sms-page.component';

describe('RegistrationFormSmsPageComponent', () => {
  let component: RegistrationFormSmsPageComponent;
  let fixture: ComponentFixture<RegistrationFormSmsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MockModule(FormsSharedModule),
        MockModule(RegistrationFormCardModule),
        MockModule(RegistrationSmsCodeModule),
        MockModule(GridModule),
      ],
      declarations: [RegistrationFormSmsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormSmsPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
