import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLayoutComponent {}
