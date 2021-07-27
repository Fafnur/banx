import { TestBed } from '@angular/core/testing';

import { ErrorsPagesModule } from './errors-pages.module';

describe('ErrorsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsPagesModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorsPagesModule).toBeTruthy();
  });
});
