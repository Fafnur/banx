import { TestBed } from '@angular/core/testing';

import { BusinessAccountPageModule } from './business-account-page.module';

describe('BusinessAccountPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessAccountPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BusinessAccountPageModule).toBeTruthy();
  });
});
