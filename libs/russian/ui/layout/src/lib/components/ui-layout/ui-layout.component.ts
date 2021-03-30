import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-ui-layout',
  templateUrl: './ui-layout.component.html',
  styleUrls: ['./ui-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLayoutComponent {}
