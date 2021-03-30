import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-ui-footer',
  templateUrl: './ui-footer.component.html',
  styleUrls: ['./ui-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFooterComponent {}
