import { Pipe, PipeTransform } from '@angular/core';

import { WrittenNumberOptions } from '@banx/russian/numerals/common';

import { WrittenNumberService } from './written-number.service';

@Pipe({
  name: 'writtenNumber',
})
export class WrittenNumberPipe implements PipeTransform {
  constructor(private readonly writtenNumberService: WrittenNumberService) {}

  transform(number: number, options?: WrittenNumberOptions): string {
    return this.writtenNumberService.get(number, options);
  }
}
