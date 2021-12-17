import { RegistrationPeriodOfEmployment } from '@banx/registration/form/common';

import { RegistrationPeriodOfEmploymentLabelPipe } from './registration-period-of-employment-label.pipe';

describe('RegistrationEmploymentTypeLabelPipe', () => {
  let pipe: RegistrationPeriodOfEmploymentLabelPipe;

  beforeEach(() => {
    pipe = new RegistrationPeriodOfEmploymentLabelPipe();
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
