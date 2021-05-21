import { TestBed } from '@angular/core/testing';

import { NumeralsSharedModule } from './numerals-shared.module';

describe('NumeralsSharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumeralsSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(NumeralsSharedModule).toBeTruthy();
  });
});
