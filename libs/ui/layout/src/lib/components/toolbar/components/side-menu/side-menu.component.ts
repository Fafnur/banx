import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Inject, Renderer2 } from '@angular/core';

import { MENU, MenuLink } from '@banx/core/menu/common';

@Component({
  selector: 'banx-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  toggle = false;

  constructor(
    private readonly renderer: Renderer2,
    @Inject(MENU) public readonly menuLinks: MenuLink[],
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  @HostBinding('class.is-open') get isOpen(): boolean {
    return this.toggle;
  }

  onToggle(): void {
    this.toggle = !this.toggle;

    if (this.toggle) {
      this.renderer.addClass(this.document.body, 'is-disable');
    } else {
      this.renderer.removeClass(this.document.body, 'is-disable');
    }
  }
}
