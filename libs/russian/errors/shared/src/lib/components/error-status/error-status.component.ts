import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-error-status',
  templateUrl: './error-status.component.html',
  styleUrls: ['./error-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorStatusComponent {}
