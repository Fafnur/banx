import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-error-logo',
  templateUrl: './error-logo.component.html',
  styleUrls: ['./error-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLogoComponent {}
