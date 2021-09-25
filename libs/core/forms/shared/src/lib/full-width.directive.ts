import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[fullWidth],[full-width]',
})
export class FullWidthDirective {}
