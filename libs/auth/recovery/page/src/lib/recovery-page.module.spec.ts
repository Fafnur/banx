import { TestBed } from '@angular/core/testing';

import { RecoveryPageModule } from './recovery-page.module';

describe('RecoveryPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoveryPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RecoveryPageModule).toBeTruthy();
  });
});
