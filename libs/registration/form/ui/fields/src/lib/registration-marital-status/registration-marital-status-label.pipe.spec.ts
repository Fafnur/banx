import { RegistrationMaritalStatus } from '@banx/registration/form/common';

import { RegistrationMaritalStatusLabelPipe } from './registration-marital-status-label.pipe';

describe('RegistrationMaritalStatusLabelPipe', () => {
  let pipe: RegistrationMaritalStatusLabelPipe;

  beforeEach(() => {
    pipe = new RegistrationMaritalStatusLabelPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return label', () => {
    // act & assert
    expect(pipe.transform(RegistrationMaritalStatus.Married)).toBe('Married');
    expect(pipe.transform(RegistrationMaritalStatus.Single)).toBe('Single');
    expect(pipe.transform(RegistrationMaritalStatus.Divorced)).toBe('Divorced');
    expect(pipe.transform(RegistrationMaritalStatus.Widower)).toBe('Widower');
  });
});
