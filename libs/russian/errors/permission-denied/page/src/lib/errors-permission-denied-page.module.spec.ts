import { TestBed } from '@angular/core/testing';

import { ErrorsPermissionDeniedPagePageModule } from './errors-permission-denied-page-page.module';

describe('ErrorsPermissionDeniedPagePageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsPermissionDeniedPagePageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorsPermissionDeniedPagePageModule).toBeTruthy();
  });
});
