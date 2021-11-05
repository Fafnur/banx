import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAdditionalContactPhoneNumberComponent } from './registration-additional-contact-phone-number.component';

describe('RegistrationAdditionalContactPhoneNumberComponent', () => {
  let component: RegistrationAdditionalContactPhoneNumberComponent;
  let fixture: ComponentFixture<RegistrationAdditionalContactPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationAdditionalContactPhoneNumberComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationAdditionalContactPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
