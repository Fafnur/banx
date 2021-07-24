import { TestBed } from '@angular/core/testing';

import { NotFoundPagePageModule } from './not-found-page-page.module';

describe('ErrorsNotFoundPagePageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPagePageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(NotFoundPagePageModule).toBeTruthy();
  });
});
