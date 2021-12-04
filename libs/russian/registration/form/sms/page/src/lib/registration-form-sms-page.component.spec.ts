import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormSmsPageComponent } from './registration-form-sms-page.component';

describe('RegistrationFormSmsPageComponent', () => {
  let component: RegistrationFormSmsPageComponent;
  let fixture: ComponentFixture<RegistrationFormSmsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormSmsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormSmsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
