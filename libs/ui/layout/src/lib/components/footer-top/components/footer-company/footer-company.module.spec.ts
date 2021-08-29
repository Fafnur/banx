import { TestBed } from '@angular/core/testing';

import { FooterCompanyModule } from './footer-company.module';

describe('FooterCompanyModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCompanyModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(FooterCompanyModule).toBeTruthy();
  });
});
