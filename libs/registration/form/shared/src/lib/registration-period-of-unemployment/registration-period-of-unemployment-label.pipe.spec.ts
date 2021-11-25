import { RegistrationPeriodOfEmployment } from '@banx/registration/form/common';

import { RegistrationPeriodOfUnemploymentLabelPipe } from './registration-period-of-unemployment-label.pipe';

describe('RegistrationPeriodOfUnemploymentLabelPipe', () => {
  let pipe: RegistrationPeriodOfUnemploymentLabelPipe;

  beforeEach(() => {
    pipe = new RegistrationPeriodOfUnemploymentLabelPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return label', () => {
    expect(pipe.transform(RegistrationPeriodOfEmployment.LessThanMonth)).toBe('Less than a month');
    expect(pipe.transform(RegistrationPeriodOfEmployment.OneThreeMonths)).toBe('1-3 months');
    expect(pipe.transform(RegistrationPeriodOfEmployment.ThreeTwelveMonths)).toBe('3-12 months');
    expect(pipe.transform(RegistrationPeriodOfEmployment.MoreThanTwelveMonths)).toBe('More than 12 months');
  });
});
