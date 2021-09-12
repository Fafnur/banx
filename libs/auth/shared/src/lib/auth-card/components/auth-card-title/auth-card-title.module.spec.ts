import { TestBed } from '@angular/core/testing';

import { AuthCardTitleModule } from './auth-card-title.module';

describe('AuthCardTitleModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthCardTitleModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AuthCardTitleModule).toBeTruthy();
  });
});
