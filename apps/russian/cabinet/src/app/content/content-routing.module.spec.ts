import { TestBed } from '@angular/core/testing';

import { ContentRoutingModule } from './content-routing.module';

describe('ContentRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ContentRoutingModule).toBeTruthy();
  });
});
