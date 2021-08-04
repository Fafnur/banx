import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { MENU, MenuLink } from '@banx/core/menu/common';

@Component({
  selector: 'banx-ui-copyright',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterMenuComponent implements OnInit {
  links!: MenuLink[];

  constructor(@Inject(MENU) private readonly menu: MenuLink[]) {}

  ngOnInit(): void {
    this.links = this.menu;
  }
}
