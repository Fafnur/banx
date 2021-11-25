import { RegistrationGender } from '@banx/registration/form/common';

import { RegistrationGenderLabelPipe } from './registration-gender-label.pipe';

describe('RegistrationGenderLabelPipe', () => {
  let pipe: RegistrationGenderLabelPipe;

  beforeEach(() => {
    pipe = new RegistrationGenderLabelPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return label', () => {
    // act & assert
    expect(pipe.transform(RegistrationGender.Female)).toBe('Female');
    expect(pipe.transform(RegistrationGender.Male)).toBe('Male');
    expect(pipe.transform(RegistrationGender.Transgender)).toBe('Transgender');
  });
});
