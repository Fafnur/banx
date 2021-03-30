import { TestBed } from '@angular/core/testing';

import { ContentHomePageRoutingModule } from './content-home-page-routing.module';

describe('ContentHomePageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentHomePageRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ContentHomePageRoutingModule).toBeTruthy();
  });
});
