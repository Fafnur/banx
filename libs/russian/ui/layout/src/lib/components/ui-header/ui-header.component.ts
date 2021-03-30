import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiHeaderComponent {}
