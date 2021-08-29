import { SocialType } from '@banx/core/social/common';

import { SocialIconPipe } from './social-icon.pipe';

describe('SocialIconPipe', () => {
  let pipe: SocialIconPipe;

  beforeEach(() => {
    pipe = new SocialIconPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    expect(pipe.transform(SocialType.Tinkoff)).toBe('banxTinkoff');
  });

  it('create an instance', () => {
    expect(pipe.transform(null)).toBe('');
  });
});
