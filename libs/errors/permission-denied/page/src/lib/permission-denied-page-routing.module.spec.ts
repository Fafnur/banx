import { TestBed } from '@angular/core/testing';

import { PermissionDeniedPageRoutingModule } from './permission-denied-page-routing.module';

describe('PermissionDeniedPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionDeniedPageRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(PermissionDeniedPageRoutingModule).toBeTruthy();
  });
});
