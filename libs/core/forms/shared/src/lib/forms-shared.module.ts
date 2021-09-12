import { NgModule } from '@angular/core';

import { ExtractFormControlPipe } from './extract-form-control.pipe';
import { ExtractFormGroupPipe } from './extract-form-group.pipe';
import { FullWidthDirective } from './full-width.directive';

const directives = [FullWidthDirective];
const pipes = [ExtractFormControlPipe, ExtractFormGroupPipe];

@NgModule({
  declarations: [...directives, ...pipes],
  exports: [...directives, ...pipes],
})
export class FormsSharedModule {}
