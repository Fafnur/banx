import { PHRASE_NUMERAL_FORMS, PhraseNumeralMode, PhraseNumeralType } from '@banx/russian/numerals/common';

import { PhraseNumeralPipe } from './phrase-numeral.pipe';
import { PhraseNumeralService } from './phrase-numeral.service';

describe('PhraseNumeralPipe', () => {
  let pipe: PhraseNumeralPipe;

  beforeEach(() => {
    pipe = new PhraseNumeralPipe(new PhraseNumeralService());
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return correct form for credit', () => {
    expect(pipe.transform(1, PhraseNumeralType.Credit, PhraseNumeralMode.Single)).toBe(PHRASE_NUMERAL_FORMS[PhraseNumeralType.Credit][0]);
    expect(pipe.transform(2, PhraseNumeralType.Credit, PhraseNumeralMode.Single)).toBe(PHRASE_NUMERAL_FORMS[PhraseNumeralType.Credit][1]);
    expect(pipe.transform(125, PhraseNumeralType.Credit, PhraseNumeralMode.Single)).toBe(PHRASE_NUMERAL_FORMS[PhraseNumeralType.Credit][2]);
  });

  it('should return correct form for credit', () => {
    expect(pipe.transform(1, PhraseNumeralType.Credit, PhraseNumeralMode.Full)).toBe(
      `1 ${PHRASE_NUMERAL_FORMS[PhraseNumeralType.Credit][0]}`
    );
    expect(pipe.transform(2, PhraseNumeralType.Credit, PhraseNumeralMode.Full)).toBe(
      `2 ${PHRASE_NUMERAL_FORMS[PhraseNumeralType.Credit][1]}`
    );
    expect(pipe.transform(125, PhraseNumeralType.Credit, PhraseNumeralMode.Full)).toBe(
      `125 ${PHRASE_NUMERAL_FORMS[PhraseNumeralType.Credit][2]}`
    );
  });
});
