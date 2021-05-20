import { NgModule } from '@angular/core';

import { PhraseNumeralPipe } from './phrase-numeral.pipe';
import { PhraseNumeralService } from './phrase-numeral.service';

const pipes = [PhraseNumeralPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
  providers: [PhraseNumeralService],
})
export class NumeralsSharedModule {}
