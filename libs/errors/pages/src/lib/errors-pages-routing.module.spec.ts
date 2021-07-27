import { TestBed } from '@angular/core/testing';

import { ErrorsPagesRoutingModule } from './errors-pages-routing.module';

describe('ErrorsRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsPagesRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorsPagesRoutingModule).toBeTruthy();
  });
});
