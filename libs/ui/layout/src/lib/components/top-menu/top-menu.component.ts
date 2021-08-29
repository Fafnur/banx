import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MENU, MenuLink } from '@banx/core/menu/common';

@Component({
  selector: 'banx-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenuComponent implements OnInit {
  links!: MenuLink[];

  constructor(private readonly route: ActivatedRoute, @Inject(MENU) private readonly menuLinks: MenuLink[]) {}

  ngOnInit(): void {
    const parent = this.route.snapshot.data?.parent ?? null;

    this.links = parent !== null ? this.menuLinks.find((link) => link.route === parent)?.children ?? [] : [];
  }
}
