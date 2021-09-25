import { TestBed } from '@angular/core/testing';

import { AuthCardSubtitleModule } from './auth-card-subtitle.module';

describe('AuthCardSubtitleModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthCardSubtitleModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AuthCardSubtitleModule).toBeTruthy();
  });
});
