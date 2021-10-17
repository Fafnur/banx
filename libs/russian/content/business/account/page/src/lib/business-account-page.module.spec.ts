import { TestBed } from '@angular/core/testing';

import { TopMenuModule } from '@banx/ui/layout';

import { BusinessAccountPageModule } from './business-account-page.module';

describe('BusinessAccountPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessAccountPageModule, TopMenuModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BusinessAccountPageModule).toBeTruthy();
  });
});
