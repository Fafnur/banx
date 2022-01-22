import { RegistrationEmploymentType } from '@banx/registration/form/common';

import { RegistrationJobDescriptionLabelPipe } from './registration-job-description-label.pipe';

describe('RegistrationJobDescriptionLabelPipe', () => {
  let pipe: RegistrationJobDescriptionLabelPipe;

  beforeEach(() => {
    pipe = new RegistrationJobDescriptionLabelPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return label', () => {
    expect(pipe.transform(RegistrationEmploymentType.FullTime)).toBe('What do you do');
    expect(pipe.transform(RegistrationEmploymentType.PartTime)).toBe('What do you do');
    expect(pipe.transform(RegistrationEmploymentType.Retired)).toBe('What did you do');
    expect(pipe.transform(RegistrationEmploymentType.Unemployed)).toBe('What did you do');
    expect(pipe.transform(RegistrationEmploymentType.Student)).toBe('What’s your major');
    expect(pipe.transform(RegistrationEmploymentType.SelfEmployed)).toBe('What do you do');
    expect(pipe.transform(RegistrationEmploymentType.Other)).toBe('What do you do');
  });
});
