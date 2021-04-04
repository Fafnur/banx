import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-server-error-page',
  templateUrl: './server-error-page.component.html',
  styleUrls: ['./server-error-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerErrorPageComponent {}
