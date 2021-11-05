import { TestBed } from '@angular/core/testing';

import { RegistrationPeriodOfUnemploymentModule } from './registration-period-of-unemployment.module';

describe('RegistrationPeriodOfUnemploymentModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationPeriodOfUnemploymentModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationPeriodOfUnemploymentModule).toBeTruthy();
  });
});
