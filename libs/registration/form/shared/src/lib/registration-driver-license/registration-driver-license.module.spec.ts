import { TestBed } from '@angular/core/testing';

import { RegistrationDriverLicenseModule } from './registration-driver-license.module';

describe('RegistrationDriverLicenseModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationDriverLicenseModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationDriverLicenseModule).toBeTruthy();
  });
});
