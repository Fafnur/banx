import { TestBed } from '@angular/core/testing';

import { AuthApiModule } from './auth-api.module';

describe('AuthApiModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthApiModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AuthApiModule).toBeTruthy();
  });
});
