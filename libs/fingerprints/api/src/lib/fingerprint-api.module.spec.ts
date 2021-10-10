import { TestBed } from '@angular/core/testing';

import { FingerprintApiModule } from './fingerprint-api.module';

describe('FingerprintApiModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FingerprintApiModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(FingerprintApiModule).toBeTruthy();
  });
});
