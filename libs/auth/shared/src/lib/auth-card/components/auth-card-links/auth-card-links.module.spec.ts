import { TestBed } from '@angular/core/testing';

import { AuthCardLinksModule } from './auth-card-links.module';

describe('AuthCardLinksModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthCardLinksModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AuthCardLinksModule).toBeTruthy();
  });
});
