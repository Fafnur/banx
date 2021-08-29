import { NgModule } from '@angular/core';

import { SocialIconPipe } from './social-icon.pipe';

const pipes = [SocialIconPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class SocialSharedModule {}
