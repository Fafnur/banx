import { TestBed } from '@angular/core/testing';

import { BusinessAccountPageRoutingModule } from './business-account-page-routing.module';

describe('BusinessAccountPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessAccountPageRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BusinessAccountPageRoutingModule).toBeTruthy();
  });
});
