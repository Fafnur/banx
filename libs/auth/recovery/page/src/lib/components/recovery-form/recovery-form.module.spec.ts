import { TestBed } from '@angular/core/testing';

import { RecoveryFormModule } from './recovery-form.module';

describe('RecoveryFormModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoveryFormModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RecoveryFormModule).toBeTruthy();
  });
});
