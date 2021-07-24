import { TestBed } from '@angular/core/testing';

import { PermissionDeniedPageModule } from './permission-denied-page.module';

describe('PermissionDeniedPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionDeniedPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(PermissionDeniedPageModule).toBeTruthy();
  });
});
