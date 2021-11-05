import { TestBed } from '@angular/core/testing';

import { RegistrationPeriodOfEmploymentModule } from './registration-period-of-employment.module';

describe('RegistrationPeriodOfEmploymentModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationPeriodOfEmploymentModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationPeriodOfEmploymentModule).toBeTruthy();
  });
});
