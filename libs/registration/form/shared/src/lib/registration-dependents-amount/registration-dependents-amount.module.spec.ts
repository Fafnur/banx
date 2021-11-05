import { TestBed } from '@angular/core/testing';

import { RegistrationDependentsAmountModule } from './registration-dependents-amount.module';

describe('RegistrationDependentsAmountModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationDependentsAmountModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationDependentsAmountModule).toBeTruthy();
  });
});
