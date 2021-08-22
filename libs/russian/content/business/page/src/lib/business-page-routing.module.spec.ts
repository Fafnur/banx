import { TestBed } from '@angular/core/testing';

import { BusinessPageRoutingModule } from './business-page-routing.module';

describe('BusinessPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPageRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BusinessPageRoutingModule).toBeTruthy();
  });
});
