import { TestBed } from '@angular/core/testing';

import { BrandModule } from './brand.module';

describe('BrandModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BrandModule).toBeTruthy();
  });
});
