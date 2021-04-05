import { TestBed } from '@angular/core/testing';

import { ErrorsServerErrorPageRoutingModule } from './errors-server-error-page-routing.module';

describe('ErrorsServerErrorPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsServerErrorPageRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorsServerErrorPageRoutingModule).toBeTruthy();
  });
});
