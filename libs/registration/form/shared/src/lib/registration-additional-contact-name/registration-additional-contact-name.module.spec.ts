import { TestBed } from '@angular/core/testing';

import { RegistrationAdditionalContactNameModule } from './registration-additional-contact-name.module';

describe('RegistrationAdditionalContactNameModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationAdditionalContactNameModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationAdditionalContactNameModule).toBeTruthy();
  });
});
