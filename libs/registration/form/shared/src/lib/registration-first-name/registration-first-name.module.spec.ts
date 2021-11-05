import { TestBed } from '@angular/core/testing';

import { RegistrationFirstNameModule } from './registration-first-name.module';

describe('RegistrationFirstNameModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationFirstNameModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationFirstNameModule).toBeTruthy();
  });
});
