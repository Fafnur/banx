import { Pipe, PipeTransform } from '@angular/core';

import { WrittenNumberOptions } from '@banx/numbers-to-words/common';
import { NumbersToWordsService } from '@banx/numbers-to-words/shared';
import { PhraseNumeralMode, PhraseNumeralType } from '@banx/russian/numerals/common';

import { PhraseNumeralService } from './phrase-numeral.service';

@Pipe({
  name: 'writtenNumberPhrase',
})
export class WrittenNumberPhrasePipe implements PipeTransform {
  constructor(private readonly numbersToWordsService: NumbersToWordsService, private readonly phraseNumeralService: PhraseNumeralService) {}

  transform(number: number, type: string | PhraseNumeralType, options?: WrittenNumberOptions): string {
    return `${this.numbersToWordsService.get(number, options)} ${this.phraseNumeralService.get({
      numeral: number,
      type,
      mode: PhraseNumeralMode.Single,
    })}`;
  }
}
