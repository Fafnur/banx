import { TestBed } from '@angular/core/testing';

import { ContentPagesRoutingModule } from './content-pages-routing.module';

describe('ErrorsRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPagesRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ContentPagesRoutingModule).toBeTruthy();
  });
});
