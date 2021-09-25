import { TestBed } from '@angular/core/testing';

import { RecoverySuccessDialogModule } from './recovery-success-dialog.module';

describe('RecoverySuccessDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoverySuccessDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RecoverySuccessDialogModule).toBeTruthy();
  });
});
