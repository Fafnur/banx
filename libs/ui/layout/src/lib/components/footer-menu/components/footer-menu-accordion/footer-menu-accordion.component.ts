import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MenuLink } from '@banx/core/menu/common';

@Component({
  selector: 'banx-footer-menu-accordion',
  templateUrl: './footer-menu-accordion.component.html',
  styleUrls: ['./footer-menu-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterMenuAccordionComponent {
  @Input() links!: MenuLink[];
}
