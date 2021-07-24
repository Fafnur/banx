import { TestBed } from '@angular/core/testing';

import { LocalizationModule } from './localization.module';

describe('LocalizationModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalizationModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(LocalizationModule).toBeTruthy();
  });
});
