import { TestBed } from '@angular/core/testing';

import { NavModule } from './nav.module';

describe('NavModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(NavModule).toBeTruthy();
  });
});
