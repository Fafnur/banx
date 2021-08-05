import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeInfoComponent {}
