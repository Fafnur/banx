import { NgModule } from '@angular/core';

import { LinkDirective } from './link.directive';

const directives = [LinkDirective];

@NgModule({
  declarations: directives,
  exports: directives,
})
export class LinksModule {}
