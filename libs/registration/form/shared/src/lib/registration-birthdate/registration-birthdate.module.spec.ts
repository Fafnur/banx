import { TestBed } from '@angular/core/testing';

import { RegistrationBirthdateModule } from './registration-birthdate.module';

describe('RegistrationBirthdateModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationBirthdateModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationBirthdateModule).toBeTruthy();
  });
});
