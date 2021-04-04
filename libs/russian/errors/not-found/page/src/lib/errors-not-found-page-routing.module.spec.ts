import { TestBed } from '@angular/core/testing';

import { ErrorsNotFoundPageRoutingModule } from './errors-not-found-page-routing.module';

describe('ErrorsNotFoundPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsNotFoundPageRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorsNotFoundPageRoutingModule).toBeTruthy();
  });
});
