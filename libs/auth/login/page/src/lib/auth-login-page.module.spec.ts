import { TestBed } from '@angular/core/testing';

import { AuthLoginPageModule } from './auth-login-page.module';

describe('AuthLoginPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLoginPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AuthLoginPageModule).toBeTruthy();
  });
});
