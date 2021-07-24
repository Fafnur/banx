import { TestBed } from '@angular/core/testing';

import { ErrorTitleModule } from './error-title.module';

describe('ErrorHintModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorTitleModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorTitleModule).toBeTruthy();
  });
});
