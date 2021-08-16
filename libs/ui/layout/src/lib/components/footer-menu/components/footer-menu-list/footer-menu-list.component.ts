import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MenuLink } from '@banx/core/menu/common';

@Component({
  selector: 'banx-footer-menu-list',
  templateUrl: './footer-menu-list.component.html',
  styleUrls: ['./footer-menu-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterMenuListComponent {
  @Input() links!: MenuLink[];
}
