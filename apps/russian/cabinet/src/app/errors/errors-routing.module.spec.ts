import { TestBed } from '@angular/core/testing';

import { ErrorsRoutingModule } from './errors-routing.module';

describe('ErrorsRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorsRoutingModule).toBeTruthy();
  });
});
