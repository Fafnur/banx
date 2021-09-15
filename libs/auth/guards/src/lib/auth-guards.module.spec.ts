import { TestBed } from '@angular/core/testing';

import { AuthGuardsModule } from './auth-guards.module';

describe('AuthGuardsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthGuardsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AuthGuardsModule).toBeTruthy();
  });
});
