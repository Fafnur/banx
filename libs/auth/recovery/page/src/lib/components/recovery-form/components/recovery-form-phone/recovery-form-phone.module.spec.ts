import { TestBed } from '@angular/core/testing';

import { RecoveryFormPhoneModule } from './recovery-form-phone.module';

describe('RecoveryFormPhoneModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoveryFormPhoneModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RecoveryFormPhoneModule).toBeTruthy();
  });
});
