import { NgModule } from '@angular/core';

import { NumbersToWordsPipe } from './numbers-to-words.pipe';
import { NumbersToWordsService } from './numbers-to-words.service';

const pipes = [NumbersToWordsPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
  providers: [NumbersToWordsService],
})
export class NumbersToWordsSharedModule {}
