import { TestBed } from '@angular/core/testing';

import { LoginFormPasswordModule } from './login-form-password.module';

describe('LoginFormPasswordModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormPasswordModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(LoginFormPasswordModule).toBeTruthy();
  });
});
