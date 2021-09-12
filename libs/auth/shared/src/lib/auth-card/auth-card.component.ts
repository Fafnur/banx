import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthCardComponent {}
