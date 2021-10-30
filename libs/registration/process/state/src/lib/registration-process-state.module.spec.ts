import { TestBed } from '@angular/core/testing';

import { RegistrationProcessStateModule } from './registration-process-state.module';

describe('RegistrationProcessStateModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationProcessStateModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationProcessStateModule).toBeTruthy();
  });
});
