import { TestBed } from '@angular/core/testing';

import { FooterTopModule } from './footer-top.module';

describe('FooterTopModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterTopModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(FooterTopModule).toBeTruthy();
  });
});
