import { Pipe, PipeTransform } from '@angular/core';

import { PhraseNumeralMode, PhraseNumeralType } from '@banx/russian/numerals/common';

import { PhraseNumeralService } from './phrase-numeral.service';

@Pipe({
  name: 'phraseNumeral',
})
export class PhraseNumeralPipe implements PipeTransform {
  constructor(private readonly phraseNumeralService: PhraseNumeralService) {}

  transform(numeral: number, type: string | PhraseNumeralType, mode?: string | PhraseNumeralMode): string {
    return this.phraseNumeralService.get({ numeral, type, mode });
  }
}
