import { TestBed } from '@angular/core/testing';

import { ErrorLinksModule } from './error-links.module';

describe('ErrorLinksModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorLinksModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorLinksModule).toBeTruthy();
  });
});
