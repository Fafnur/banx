import { TestBed } from '@angular/core/testing';

import { FooterMenuListModule } from './footer-menu-list.module';

describe('FooterMenuListModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMenuListModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(FooterMenuListModule).toBeTruthy();
  });
});
