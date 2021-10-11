import { TestBed } from '@angular/core/testing';

import { FingerprintStateModule } from './fingerprint-state.module';

describe('FingerprintStateModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FingerprintStateModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(FingerprintStateModule).toBeTruthy();
  });
});
