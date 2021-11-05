import { TestBed } from '@angular/core/testing';

import { RegistrationKidsAmountModule } from './registration-kids-amount.module';

describe('RegistrationKidsAmountModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationKidsAmountModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationKidsAmountModule).toBeTruthy();
  });
});
