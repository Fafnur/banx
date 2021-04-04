import { TestBed } from '@angular/core/testing';

import { ErrorsPermissionDeniedPageRoutingModule } from './errors-permission-denied-page-routing.module';

describe('ErrorsPermissionDeniedPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsPermissionDeniedPageRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorsPermissionDeniedPageRoutingModule).toBeTruthy();
  });
});
