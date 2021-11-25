import { RegistrationDependentsAmount } from '@banx/registration/form/common';

import { RegistrationDependentsAmountLabelPipe } from './registration-dependents-amount-label.pipe';

describe('RegistrationAdditionalContactTypeLabelPipe', () => {
  let pipe: RegistrationDependentsAmountLabelPipe;

  beforeEach(() => {
    pipe = new RegistrationDependentsAmountLabelPipe();
  });

  it('show return label', () => {
    // act & assert
    expect(pipe.transform(RegistrationDependentsAmount.None)).toBe('None');
    expect(pipe.transform(RegistrationDependentsAmount.One)).toBe('One');
    expect(pipe.transform(RegistrationDependentsAmount.Two)).toBe('Two');
    expect(pipe.transform(RegistrationDependentsAmount.Three)).toBe('Three');
    expect(pipe.transform(RegistrationDependentsAmount.FourAndMore)).toBe('Four and more');
  });
});
