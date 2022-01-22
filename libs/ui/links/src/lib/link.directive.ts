import { Directive } from '@angular/core';

@Directive({
  selector: 'a[banxLink],a[banx-link],button[banxLink],button[banx-link]',
})
export class LinkDirective {}
