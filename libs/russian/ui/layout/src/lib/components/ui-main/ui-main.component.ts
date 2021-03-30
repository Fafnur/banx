import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-ui-main',
  templateUrl: './ui-main.component.html',
  styleUrls: ['./ui-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMainComponent {}
