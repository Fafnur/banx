import { TestBed } from '@angular/core/testing';

import { RegistrationPostcodeModule } from './registration-postcode.module';

describe('RegistrationPostcodeModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationPostcodeModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationPostcodeModule).toBeTruthy();
  });
});
