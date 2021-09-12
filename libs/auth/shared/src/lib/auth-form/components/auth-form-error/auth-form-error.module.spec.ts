import { TestBed } from '@angular/core/testing';

import { AuthFormErrorModule } from './auth-form-error.module';

describe('AuthFormErrorModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormErrorModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AuthFormErrorModule).toBeTruthy();
  });
});
