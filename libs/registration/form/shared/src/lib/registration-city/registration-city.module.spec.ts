import { TestBed } from '@angular/core/testing';

import { RegistrationCityModule } from './registration-city.module';

describe('RegistrationCityModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationCityModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationCityModule).toBeTruthy();
  });
});
