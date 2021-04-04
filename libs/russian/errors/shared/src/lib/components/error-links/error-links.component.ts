import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-error-links',
  templateUrl: './error-links.component.html',
  styleUrls: ['./error-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLinksComponent {}
