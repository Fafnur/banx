import { TestBed } from '@angular/core/testing';

import { RegistrationGenderModule } from './registration-gender.module';

describe('RegistrationGenderModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationGenderModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationGenderModule).toBeTruthy();
  });
});
