import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { EnvironmentService } from '@banx/core/environments/service';
import { MENU, MenuLink } from '@banx/core/menu/common';
import { NAVIGATION_PATHS, NavigationPaths, PATHS } from '@banx/core/navigation/common';

@Component({
  selector: 'banx-footer-company',
  templateUrl: './footer-company.component.html',
  styleUrls: ['./footer-company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterCompanyComponent implements OnInit {
  links!: MenuLink | null;
  brand!: string;

  constructor(
    private readonly environmentService: EnvironmentService,
    @Inject(PATHS) public readonly paths: NavigationPaths,
    @Inject(MENU) private readonly menuLinks: MenuLink[]
  ) {}

  ngOnInit(): void {
    this.brand = this.environmentService.environments.brand;
    this.links = this.menuLinks.find((link) => link.route === NAVIGATION_PATHS.company) ?? null;
  }
}
