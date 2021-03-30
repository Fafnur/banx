import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'banx-ui-container',
  templateUrl: './ui-container.component.html',
  styleUrls: ['./ui-container.component.scss'],
})
export class UiContainerComponent {
  @Input() mode: 'flex' | 'flex-row';

  @HostBinding('class.is-flex') get isFlex(): boolean {
    return this.mode === 'flex';
  }

  @HostBinding('class.is-flex-row') get isFlexRow(): boolean {
    return this.mode === 'flex-row';
  }
}
