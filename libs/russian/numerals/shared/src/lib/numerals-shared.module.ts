import { NgModule } from '@angular/core';

import { PhraseNumeralPipe } from './phrase-numeral.pipe';
import { PhraseNumeralService } from './phrase-numeral.service';
import { WrittenNumberPipe } from './written-number.pipe';
import { WrittenNumberService } from './written-number.service';
import { WrittenNumberPhrasePipe } from './written-number-phrase.pipe';

const pipes = [PhraseNumeralPipe, WrittenNumberPipe, WrittenNumberPhrasePipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
  providers: [PhraseNumeralService, WrittenNumberService],
})
export class NumeralsSharedModule {}
