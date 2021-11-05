import { TestBed } from '@angular/core/testing';

import { RegistrationInstitutionNameModule } from './registration-institution-name.module';

describe('RegistrationInstitutionNameModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationInstitutionNameModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationInstitutionNameModule).toBeTruthy();
  });
});
