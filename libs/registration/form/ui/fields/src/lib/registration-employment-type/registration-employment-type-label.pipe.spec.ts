import { RegistrationEmploymentType } from '@banx/registration/form/common';

import { RegistrationEmploymentTypeLabelPipe } from './registration-employment-type-label.pipe';

describe('RegistrationEmploymentTypeLabelPipe', () => {
  let pipe: RegistrationEmploymentTypeLabelPipe;

  beforeEach(() => {
    pipe = new RegistrationEmploymentTypeLabelPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return label', () => {
    expect(pipe.transform(RegistrationEmploymentType.FullTime)).toBe('Full-time');
    expect(pipe.transform(RegistrationEmploymentType.PartTime)).toBe('Part-time');
    expect(pipe.transform(RegistrationEmploymentType.Retired)).toBe('Retired');
    expect(pipe.transform(RegistrationEmploymentType.Unemployed)).toBe('Unemployed');
    expect(pipe.transform(RegistrationEmploymentType.Student)).toBe('Student');
    expect(pipe.transform(RegistrationEmploymentType.SelfEmployed)).toBe('Self employed');
    expect(pipe.transform(RegistrationEmploymentType.Other)).toBe('Other');
  });
});
