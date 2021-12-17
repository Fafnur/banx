import { RegistrationEmploymentType } from '@banx/registration/form/common';

import { RegistrationEmployerNameLabelPipe } from './registration-employer-name-label.pipe';

describe('RegistrationEmployerNameLabelPipe', () => {
  let pipe: RegistrationEmployerNameLabelPipe;

  beforeEach(() => {
    pipe = new RegistrationEmployerNameLabelPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return label', () => {
    expect(pipe.transform(RegistrationEmploymentType.FullTime)).toBe('Where do you work');
    expect(pipe.transform(RegistrationEmploymentType.PartTime)).toBe('Where do you work');
    expect(pipe.transform(RegistrationEmploymentType.Retired)).toBe('Where did you worked before');
    expect(pipe.transform(RegistrationEmploymentType.Unemployed)).toBe('Where did you worked before');
    expect(pipe.transform(RegistrationEmploymentType.Student)).toBe('Where do you study');
    expect(pipe.transform(RegistrationEmploymentType.SelfEmployed)).toBe('Where do you work');
    expect(pipe.transform(RegistrationEmploymentType.Other)).toBe('Where do you work');
  });
});
