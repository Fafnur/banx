import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-home-page',
  templateUrl: './content-home-page.component.html',
  styleUrls: ['./content-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentHomePageComponent {}
