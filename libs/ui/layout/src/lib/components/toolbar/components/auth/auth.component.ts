import { ChangeDetectionStrategy, Component } from '@angular/core';

import { User } from '@banx/users/common';

@Component({
  selector: 'banx-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  user: User | null = null;
}
