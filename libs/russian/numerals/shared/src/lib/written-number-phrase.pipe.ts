import { Pipe, PipeTransform } from '@angular/core';

import { PhraseNumeralMode, PhraseNumeralType, WrittenNumberOptions } from '@banx/russian/numerals/common';

import { PhraseNumeralService } from './phrase-numeral.service';
import { WrittenNumberService } from './written-number.service';

@Pipe({
  name: 'writtenNumberPhrase',
})
export class WrittenNumberPhrasePipe implements PipeTransform {
  constructor(private readonly writtenNumberService: WrittenNumberService, private readonly phraseNumeralService: PhraseNumeralService) {}

  transform(number: number, type: string | PhraseNumeralType, options?: WrittenNumberOptions): string {
    return `${this.writtenNumberService.get(number, options)} ${this.phraseNumeralService.get({
      numeral: number,
      type,
      mode: PhraseNumeralMode.Single,
    })}`;
  }
}
