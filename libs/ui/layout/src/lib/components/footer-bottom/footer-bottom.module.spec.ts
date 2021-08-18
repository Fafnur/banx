import { TestBed } from '@angular/core/testing';

import { FooterBottomModule } from './footer-bottom.module';

describe('FooterBottomModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBottomModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(FooterBottomModule).toBeTruthy();
  });
});
