import { RegistrationErrorType } from '@banx/registration/form/common';

import { RegistrationFormErrorPipe } from './registration-form-error.pipe';

describe('RegistrationFormErrorPipe', () => {
  let pipe: RegistrationFormErrorPipe;

  beforeEach(() => {
    pipe = new RegistrationFormErrorPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return label', () => {
    // act & assert
    expect(pipe.transform({ [RegistrationErrorType.IsNotEmpty]: true })).toBe('Is Not Empty');
  });
});
