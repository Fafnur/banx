import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { MENU, MenuLink } from '@banx/core/menu/common';
import { NAVIGATION_PATHS, NavigationPaths, PATHS } from '@banx/core/navigation/common';

@Component({
  selector: 'banx-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent implements OnInit {
  links!: MenuLink[];

  constructor(@Inject(MENU) private readonly menuLinks: MenuLink[], @Inject(PATHS) public readonly paths: NavigationPaths) {}

  ngOnInit(): void {
    this.links = this.menuLinks.filter((link) => link.route !== NAVIGATION_PATHS.company);
  }
}
