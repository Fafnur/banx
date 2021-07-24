import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-permission-denied-page',
  templateUrl: './permission-denied-page.component.html',
  styleUrls: ['./permission-denied-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PermissionDeniedPageComponent {}
