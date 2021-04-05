import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-error-hint',
  templateUrl: './error-hint.component.html',
  styleUrls: ['./error-hint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorHintComponent {}
