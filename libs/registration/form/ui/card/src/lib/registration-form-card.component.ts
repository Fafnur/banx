import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-registration-form-card',
  templateUrl: './registration-form-card.component.html',
  styleUrls: ['./registration-form-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormCardComponent {}
