import { TestBed } from '@angular/core/testing';

import { CookieService } from './cookie.service';

describe('CookieService', () => {
  let service: CookieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CookieService],
    }).compileComponents();

    service = TestBed.inject(CookieService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
