import { TestBed } from '@angular/core/testing';

import { RegistrationMinimalDesiredAmountModule } from './registration-minimal-desired-amount.module';

describe('RegistrationMinimalDesiredAmountModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationMinimalDesiredAmountModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationMinimalDesiredAmountModule).toBeTruthy();
  });
});
