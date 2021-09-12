import { TestBed } from '@angular/core/testing';

import { AuthCardModule } from './auth-card.module';

describe('AuthCardModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthCardModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AuthCardModule).toBeTruthy();
  });
});
