import { TestBed } from '@angular/core/testing';

import { LoginPageModule } from './login-page.module';

describe('AuthLoginPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(LoginPageModule).toBeTruthy();
  });
});
