import { TestBed } from '@angular/core/testing';

import { RecoveryFormBirthdateModule } from './recovery-form-birthdate.module';

describe('RecoveryFormBirthdateModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoveryFormBirthdateModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RecoveryFormBirthdateModule).toBeTruthy();
  });
});
