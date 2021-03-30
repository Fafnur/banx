import { TestBed } from '@angular/core/testing';

import { ContentHomePageModule } from './content-home-page.module';

describe('ContentHomePageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentHomePageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ContentHomePageModule).toBeTruthy();
  });
});
