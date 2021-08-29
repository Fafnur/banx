import { TestBed } from '@angular/core/testing';

import { BusinessPageModule } from './business-page.module';

describe('BusinessPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BusinessPageModule).toBeTruthy();
  });
});
