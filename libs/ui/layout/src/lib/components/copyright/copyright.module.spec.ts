import { TestBed } from '@angular/core/testing';

import { CopyrightModule } from './copyright.module';

describe('CopyrightModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyrightModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(CopyrightModule).toBeTruthy();
  });
});
