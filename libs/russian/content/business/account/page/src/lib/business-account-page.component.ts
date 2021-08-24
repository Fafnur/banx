import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banx-bank-business-page',
  templateUrl: './business-account-page.component.html',
  styleUrls: ['./business-account-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessAccountPageComponent {}
