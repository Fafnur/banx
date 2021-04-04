import { TestBed } from '@angular/core/testing';

import { ErrorsNotFoundPagePageModule } from './errors-not-found-page-page.module';

describe('ErrorsNotFoundPagePageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsNotFoundPagePageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorsNotFoundPagePageModule).toBeTruthy();
  });
});
