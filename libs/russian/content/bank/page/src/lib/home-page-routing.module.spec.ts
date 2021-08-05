import { TestBed } from '@angular/core/testing';

import { HomePageRoutingModule } from './home-page-routing.module';

describe('ContentHomePageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(HomePageRoutingModule).toBeTruthy();
  });
});
