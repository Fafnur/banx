import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MenuLink } from '@banx/core/menu/common';

@Component({
  selector: 'banx-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  @Input() links!: MenuLink[];
}
