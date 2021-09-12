import { TestBed } from '@angular/core/testing';

import { LoginFormUsernameModule } from './login-form-username.module';

describe('LoginFormUsernameModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormUsernameModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(LoginFormUsernameModule).toBeTruthy();
  });
});
