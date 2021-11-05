import { TestBed } from '@angular/core/testing';

import { RegistrationSmsCodeModule } from './registration-sms-code.module';

describe('RegistrationSmsCodeModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationSmsCodeModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationSmsCodeModule).toBeTruthy();
  });
});
