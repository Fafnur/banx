import { TestBed } from '@angular/core/testing';

import { CreditCardPageModule } from './credit-card-page.module';

describe('CreditCardPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditCardPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(CreditCardPageModule).toBeTruthy();
  });
});
