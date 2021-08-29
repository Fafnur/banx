import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {}
