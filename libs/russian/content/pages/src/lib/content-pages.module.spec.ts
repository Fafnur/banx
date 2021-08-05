import { TestBed } from '@angular/core/testing';

import { ContentPagesModule } from './content-pages.module';

describe('ErrorsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPagesModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ContentPagesModule).toBeTruthy();
  });
});
