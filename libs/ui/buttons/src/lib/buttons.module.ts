import { NgModule } from '@angular/core';

import { ButtonGroupDirective } from './button-group.directive';
import { ButtonLargeDirective } from './button-large.directive';
import { ButtonMediumDirective } from './button-medium.directive';
import { ButtonSmallDirective } from './button-small.directive';

const directives = [ButtonMediumDirective, ButtonLargeDirective, ButtonSmallDirective, ButtonGroupDirective];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
})
export class ButtonsModule {}
