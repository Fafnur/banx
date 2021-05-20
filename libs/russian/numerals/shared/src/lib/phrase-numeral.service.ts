import { Injectable } from '@angular/core';

import { numeralToPhraseWithNumeral, PHRASE_NUMERAL_FORMS, PhraseNumeralMode, PhraseNumeralType } from '@banx/russian/numerals/common';

export interface PhraseNumeralOptions {
  numeral: number;
  type: string | PhraseNumeralType;
  mode?: string | PhraseNumeralMode;
}

@Injectable()
export class PhraseNumeralService {
  get(options: PhraseNumeralOptions): string {
    const form = numeralToPhraseWithNumeral(options.numeral, PHRASE_NUMERAL_FORMS[options.type as PhraseNumeralType]);

    return options.mode === PhraseNumeralMode.Single ? form : `${options.numeral} ${form}`;
  }
}
