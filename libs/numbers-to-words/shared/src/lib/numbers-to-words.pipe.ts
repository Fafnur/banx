import { Pipe, PipeTransform } from '@angular/core';

import { WrittenNumberOptions } from '@banx/numbers-to-words/common';

import { NumbersToWordsService } from './numbers-to-words.service';

@Pipe({
  name: 'numbersToWords',
})
export class NumbersToWordsPipe implements PipeTransform {
  constructor(private readonly writtenNumberService: NumbersToWordsService) {}

  transform(number: number, options?: WrittenNumberOptions): string {
    return this.writtenNumberService.get(number, options);
  }
}
