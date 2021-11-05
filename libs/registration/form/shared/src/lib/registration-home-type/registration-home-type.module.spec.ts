import { TestBed } from '@angular/core/testing';

import { RegistrationHomeTypeModule } from './registration-home-type.module';

describe('RegistrationHomeTypeModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationHomeTypeModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationHomeTypeModule).toBeTruthy();
  });
});
