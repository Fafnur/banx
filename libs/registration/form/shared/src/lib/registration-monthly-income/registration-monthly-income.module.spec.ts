import { TestBed } from '@angular/core/testing';

import { RegistrationMonthlyIncomeModule } from './registration-monthly-income.module';

describe('RegistrationMonthlyIncomeModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationMonthlyIncomeModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationMonthlyIncomeModule).toBeTruthy();
  });
});
