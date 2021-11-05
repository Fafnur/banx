import { TestBed } from '@angular/core/testing';

import { RegistrationMobilePhoneModule } from './registration-mobile-phone.module';

describe('RegistrationMobilePhoneModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationMobilePhoneModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationMobilePhoneModule).toBeTruthy();
  });
});
