import { TestBed } from '@angular/core/testing';

import { FooterPhoneModule } from './footer-phone.module';

describe('FooterPhoneModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterPhoneModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(FooterPhoneModule).toBeTruthy();
  });
});
