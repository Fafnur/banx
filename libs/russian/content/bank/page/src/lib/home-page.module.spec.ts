import { TestBed } from '@angular/core/testing';

import { HomePageModule } from './home-page.module';

describe('ContentHomePageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(HomePageModule).toBeTruthy();
  });
});
