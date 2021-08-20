import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-locale-switcher',
  templateUrl: './locale-switcher.component.html',
  styleUrls: ['./locale-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocaleSwitcherComponent {}
