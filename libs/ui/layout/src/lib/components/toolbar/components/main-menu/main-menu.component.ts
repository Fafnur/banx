import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { MENU, MENU_DEFAULT, MenuLink } from '@banx/core/menu/common';
import { NAVIGATION_PATHS } from '@banx/core/navigation/common';

@Component({
  selector: 'banx-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent implements OnInit {
  links!: MenuLink[];
  home!: MenuLink;

  constructor(@Inject(MENU) private readonly menuLinks: MenuLink[]) {}

  ngOnInit(): void {
    const links = this.menuLinks.filter((link) => link.route !== NAVIGATION_PATHS.company);
    this.home = links.length ? links[0] : MENU_DEFAULT[1];
    this.links = links.length > 1 ? links.slice(1) : [];
  }
}
