import { TestBed } from '@angular/core/testing';

import { RegistrationAdditionalContactPhoneNumberModule } from './registration-additional-contact-phone-number.module';

describe('RegistrationAdditionalContactPhoneNumberModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationAdditionalContactPhoneNumberModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationAdditionalContactPhoneNumberModule).toBeTruthy();
  });
});
