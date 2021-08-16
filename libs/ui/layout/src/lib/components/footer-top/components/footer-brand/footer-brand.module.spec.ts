import { TestBed } from '@angular/core/testing';

import { FooterBrandModule } from './footer-brand.module';

describe('FooterBrandModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBrandModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(FooterBrandModule).toBeTruthy();
  });
});
