import { TestBed } from '@angular/core/testing';

import { AuthFormModule } from './auth-form.module';

describe('AuthFormModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AuthFormModule).toBeTruthy();
  });
});
