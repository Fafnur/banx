import { TestBed } from '@angular/core/testing';

import { RegistrationEmailModule } from './registration-email.module';

describe('RegistrationEmailModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationEmailModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationEmailModule).toBeTruthy();
  });
});
