import { TestBed } from '@angular/core/testing';

import { UiLayoutModule } from './ui-layout.module';

describe('UiLayoutModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiLayoutModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(UiLayoutModule).toBeTruthy();
  });
});
