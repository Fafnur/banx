import { RegistrationHomeType } from '@banx/registration/form/common';

import { RegistrationHomeTypeLabelPipe } from './registration-home-type-label.pipe';

describe('RegistrationHomeTypeLabelPipe', () => {
  let pipe: RegistrationHomeTypeLabelPipe;

  beforeEach(() => {
    pipe = new RegistrationHomeTypeLabelPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return label', () => {
    // act & assert
    expect(pipe.transform(RegistrationHomeType.OwnProperty)).toBe('Own property');
    expect(pipe.transform(RegistrationHomeType.Rent)).toBe('Rent');
    expect(pipe.transform(RegistrationHomeType.WithFamily)).toBe('With Family');
    expect(pipe.transform(RegistrationHomeType.WithFriend)).toBe('With Friends');
    expect(pipe.transform(RegistrationHomeType.PayingGuest)).toBe('Paying Guest');
  });
});
