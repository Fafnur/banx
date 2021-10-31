import { TestBed } from '@angular/core/testing';

import { RegistrationFormApiModule } from './registration-form-api.module';

describe('RegistrationFormApiModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationFormApiModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationFormApiModule).toBeTruthy();
  });
});
