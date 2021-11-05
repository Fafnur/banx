import { TestBed } from '@angular/core/testing';

import { RegistrationAgreementModule } from './registration-agreement.module';

describe('RegistrationAgreementModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationAgreementModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationAgreementModule).toBeTruthy();
  });
});
