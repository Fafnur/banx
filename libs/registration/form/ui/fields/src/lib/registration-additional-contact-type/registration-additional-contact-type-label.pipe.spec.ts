import { RegistrationAdditionalContactType } from '@banx/registration/form/common';

import { RegistrationAdditionalContactTypeLabelPipe } from './registration-additional-contact-type-label.pipe';

describe('RegistrationAdditionalContactTypeLabelPipe', () => {
  let pipe: RegistrationAdditionalContactTypeLabelPipe;

  beforeEach(() => {
    pipe = new RegistrationAdditionalContactTypeLabelPipe();
  });

  it('show return label', () => {
    // act & assert
    expect(pipe.transform(RegistrationAdditionalContactType.Spouse)).toBe('Spouse');
    expect(pipe.transform(RegistrationAdditionalContactType.Friend)).toBe('Friend');
    expect(pipe.transform(RegistrationAdditionalContactType.Parent)).toBe('Mother/Father');
    expect(pipe.transform(RegistrationAdditionalContactType.Colleague)).toBe('Colleague');
    expect(pipe.transform(RegistrationAdditionalContactType.Sibling)).toBe('Sister/Brother');
  });
});
