import { NgModule } from '@angular/core';

import { ButtonLargeDirective } from './button-large.directive';
import { ButtonMediumDirective } from './button-medium.directive';

const directives = [ButtonMediumDirective, ButtonLargeDirective];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
})
export class ButtonsModule {}
