import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-error-application',
  templateUrl: './error-application.component.html',
  styleUrls: ['./error-application.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorApplicationComponent {}