import { TestBed } from '@angular/core/testing';

import { CreditCardPageRoutingModule } from './credit-card-page-routing.module';

describe('CreditCardPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditCardPageRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(CreditCardPageRoutingModule).toBeTruthy();
  });
});
