import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-bank-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessPageComponent {}
