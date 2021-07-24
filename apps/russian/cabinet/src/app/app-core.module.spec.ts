import { TestBed } from '@angular/core/testing';

import { AppCoreModule } from './app-core.module';

describe('AppCoreModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCoreModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AppCoreModule).toBeTruthy();
  });
});
