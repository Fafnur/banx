import { TestBed } from '@angular/core/testing';

import { PHRASE_NUMERAL_FORMS, PhraseNumeralMode, PhraseNumeralType } from '@banx/russian/numerals/common';

import { PhraseNumeralOptions, PhraseNumeralService } from './phrase-numeral.service';

describe('PhraseNumeralService', () => {
  let service: PhraseNumeralService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhraseNumeralService],
    });
    service = TestBed.inject(PhraseNumeralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct form for credit', () => {
    const form: PhraseNumeralOptions = {
      numeral: 1,
      type: PhraseNumeralType.Credit,
      mode: PhraseNumeralMode.Full,
    };
    const formResult = `${form.numeral} ${PHRASE_NUMERAL_FORMS[PhraseNumeralType.Credit][0]}`;

    expect(service.get(form)).toBe(formResult);
  });

  it('should return correct second form for credit', () => {
    const form: PhraseNumeralOptions = {
      numeral: 2,
      type: PhraseNumeralType.Credit,
      mode: PhraseNumeralMode.Full,
    };
    const formResult = `${form.numeral} ${PHRASE_NUMERAL_FORMS[PhraseNumeralType.Credit][1]}`;

    expect(service.get(form)).toBe(formResult);
  });

  it('should return correct third form for credit', () => {
    const form: PhraseNumeralOptions = {
      numeral: 5,
      type: PhraseNumeralType.Credit,
      mode: PhraseNumeralMode.Full,
    };
    const formResult = `${form.numeral} ${PHRASE_NUMERAL_FORMS[PhraseNumeralType.Credit][2]}`;

    expect(service.get(form)).toBe(formResult);
  });

  it('should return correct single form for credit', () => {
    const form: PhraseNumeralOptions = {
      numeral: 1,
      type: PhraseNumeralType.Credit,
      mode: PhraseNumeralMode.Single,
    };
    const formResult = PHRASE_NUMERAL_FORMS[PhraseNumeralType.Credit][0];

    expect(service.get(form)).toBe(formResult);
  });

  it('should return correct single second form for credit', () => {
    const form: PhraseNumeralOptions = {
      numeral: 2,
      type: PhraseNumeralType.Credit,
      mode: PhraseNumeralMode.Single,
    };
    const formResult = PHRASE_NUMERAL_FORMS[PhraseNumeralType.Credit][1];

    expect(service.get(form)).toBe(formResult);
  });

  it('should return correct single third form for credit', () => {
    const form: PhraseNumeralOptions = {
      numeral: 5,
      type: PhraseNumeralType.Credit,
      mode: PhraseNumeralMode.Single,
    };
    const formResult = PHRASE_NUMERAL_FORMS[PhraseNumeralType.Credit][2];

    expect(service.get(form)).toBe(formResult);
  });
});
