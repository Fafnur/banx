import { TestBed } from '@angular/core/testing';

import { AuthCardHintModule } from './auth-card-hint.module';

describe('AuthCardHintModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthCardHintModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AuthCardHintModule).toBeTruthy();
  });
});
