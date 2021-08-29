import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { NavigationPaths, PATHS } from '@banx/core/navigation/common';

@Component({
  selector: 'banx-ui-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandComponent {
  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
