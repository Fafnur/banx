import { RegistrationKidsAmount } from '@banx/registration/form/common';

import { RegistrationKidsAmountLabelPipe } from './registration-kids-amount-label.pipe';

describe('RegistrationKidsAmountLabelPipe', () => {
  let pipe: RegistrationKidsAmountLabelPipe;

  beforeEach(() => {
    pipe = new RegistrationKidsAmountLabelPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return label', () => {
    expect(pipe.transform(RegistrationKidsAmount.One)).toBe('One');
    expect(pipe.transform(RegistrationKidsAmount.Two)).toBe('Two');
    expect(pipe.transform(RegistrationKidsAmount.Three)).toBe('Three');
    expect(pipe.transform(RegistrationKidsAmount.FourAndMore)).toBe('Four and more');
    expect(pipe.transform(RegistrationKidsAmount.None)).toBe('None');
  });
});
