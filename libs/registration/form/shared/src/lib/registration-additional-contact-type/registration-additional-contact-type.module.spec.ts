import { TestBed } from '@angular/core/testing';

import { RegistrationAdditionalContactTypeModule } from './registration-additional-contact-type.module';

describe('RegistrationAdditionalContactTypeModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationAdditionalContactTypeModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationAdditionalContactTypeModule).toBeTruthy();
  });
});
