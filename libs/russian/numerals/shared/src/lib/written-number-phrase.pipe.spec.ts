import { RU_LOCALE } from '@banx/numbers-to-words/common';
import { NumbersToWordsService } from '@banx/numbers-to-words/shared';
import { PhraseNumeralType } from '@banx/russian/numerals/common';

import { PhraseNumeralService } from './phrase-numeral.service';
import { WrittenNumberPhrasePipe } from './written-number-phrase.pipe';

describe('WrittenNumberPhrasePipe', () => {
  let pipe: WrittenNumberPhrasePipe;

  beforeEach(() => {
    pipe = new WrittenNumberPhrasePipe(new NumbersToWordsService(RU_LOCALE), new PhraseNumeralService());
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return correct form', () => {
    expect(pipe.transform(1, PhraseNumeralType.Loan)).toBe('один займ');
    expect(pipe.transform(11, PhraseNumeralType.Application)).toBe('одиннадцать заявок');
    expect(pipe.transform(123, PhraseNumeralType.Credit)).toBe('сто двадцать три кредита');
  });
});
