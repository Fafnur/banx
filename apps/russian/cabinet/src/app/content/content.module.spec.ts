import { TestBed } from '@angular/core/testing';

import { ContentModule } from './content.module';

describe('ContentModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ContentModule).toBeTruthy();
  });
});
