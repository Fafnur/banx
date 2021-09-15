import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Output } from '@angular/core';

import { NavigationPaths, PATHS } from '@banx/core/navigation/common';

@Component({
  selector: 'banx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Output() logout = new EventEmitter<void>();

  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}

  onLogout(): void {
    this.logout.emit();
  }
}
