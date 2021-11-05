  import { TestBed } from '@angular/core/testing';

import { RegistrationMaritalStatusModule } from './registration-marital-status.module';

describe('RegistrationMaritalStatusModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationMaritalStatusModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationMaritalStatusModule).toBeTruthy();
  });
});
