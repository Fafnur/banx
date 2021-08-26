import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { MenuLink } from '@banx/core/menu/common';

@Component({
  selector: 'banx-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  @Input() links!: MenuLink[];
  @Output() clicked = new EventEmitter<MenuLink>();

  onClick(link: MenuLink): void {
    this.clicked.emit(link);
  }
}
