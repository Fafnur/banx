import { TestBed } from '@angular/core/testing';

import { RegistrationFormStateModule } from './registration-form-state.module';

describe('RegistrationFormStateModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationFormStateModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationFormStateModule).toBeTruthy();
  });
});
