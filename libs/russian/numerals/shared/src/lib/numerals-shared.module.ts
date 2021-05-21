import { NgModule } from '@angular/core';

import { PhraseNumeralPipe } from './phrase-numeral.pipe';
import { PhraseNumeralService } from './phrase-numeral.service';
import { WrittenNumberService } from './written-number.service';

const pipes = [PhraseNumeralPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
  providers: [PhraseNumeralService, WrittenNumberService],
})
export class NumeralsSharedModule {}
