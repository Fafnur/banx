import { TestBed } from '@angular/core/testing';

import { NotFoundPageRoutingModule } from './not-found-page-routing.module';

describe('ErrorsNotFoundPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPageRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(NotFoundPageRoutingModule).toBeTruthy();
  });
});
