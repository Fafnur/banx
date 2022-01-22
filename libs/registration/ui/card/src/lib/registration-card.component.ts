import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-registration-card',
  templateUrl: './registration-card.component.html',
  styleUrls: ['./registration-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationCardComponent {}
