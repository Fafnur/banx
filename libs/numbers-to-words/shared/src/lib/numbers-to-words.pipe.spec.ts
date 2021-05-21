import { RU_LOCALE } from '@banx/numbers-to-words/common';

import { NumbersToWordsPipe } from './numbers-to-words.pipe';
import { NumbersToWordsService } from './numbers-to-words.service';

describe('NumbersToWordsPipe', () => {
  let pipe: NumbersToWordsPipe;

  beforeEach(() => {
    pipe = new NumbersToWordsPipe(new NumbersToWordsService(RU_LOCALE));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return correct form', () => {
    expect(pipe.transform(1)).toBe('один');
    expect(pipe.transform(11)).toBe('одинадцать');
    expect(pipe.transform(123)).toBe('сто двадцать три');
  });
});
