import { TestBed } from '@angular/core/testing';

import { TopMenuModule } from '@banx/ui/layout';

import { CreditCardPageModule } from './credit-card-page.module';

describe('CreditCardPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditCardPageModule, TopMenuModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(CreditCardPageModule).toBeTruthy();
  });
});
