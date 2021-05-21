import { NgModule } from '@angular/core';

import { NUMBER_LOCALE, RU_LOCALE } from '@banx/numbers-to-words/common';
import { NumbersToWordsSharedModule } from '@banx/numbers-to-words/shared';

import { PhraseNumeralPipe } from './phrase-numeral.pipe';
import { PhraseNumeralService } from './phrase-numeral.service';
import { WrittenNumberPhrasePipe } from './written-number-phrase.pipe';

const pipes = [PhraseNumeralPipe, WrittenNumberPhrasePipe];

@NgModule({
  imports: [NumbersToWordsSharedModule],
  declarations: [...pipes],
  exports: [...pipes],
  providers: [
    PhraseNumeralService,
    {
      provide: NUMBER_LOCALE,
      useValue: RU_LOCALE,
    },
  ],
})
export class NumeralsSharedModule {}
