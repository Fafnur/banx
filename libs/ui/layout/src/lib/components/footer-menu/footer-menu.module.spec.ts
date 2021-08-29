import { TestBed } from '@angular/core/testing';

import { FooterMenuModule } from './footer-menu.module';

describe('FooterMenuModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMenuModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(FooterMenuModule).toBeTruthy();
  });
});
