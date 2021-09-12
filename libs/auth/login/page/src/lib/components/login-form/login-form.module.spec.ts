import { TestBed } from '@angular/core/testing';

import { LoginFormModule } from './login-form.module';

describe('LoginFormModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(LoginFormModule).toBeTruthy();
  });
});
