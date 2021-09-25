import { TestBed } from '@angular/core/testing';

import { AuthPagesModule } from './auth-pages.module';

describe('AuthPagesModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthPagesModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AuthPagesModule).toBeTruthy();
  });
});
