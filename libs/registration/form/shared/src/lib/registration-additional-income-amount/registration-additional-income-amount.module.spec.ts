import { TestBed } from '@angular/core/testing';

import { RegistrationAdditionalIncomeAmountModule } from './registration-additional-income-amount.module';

describe('RegistrationAdditionalIncomeAmountModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationAdditionalIncomeAmountModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationAdditionalIncomeAmountModule).toBeTruthy();
  });
});
