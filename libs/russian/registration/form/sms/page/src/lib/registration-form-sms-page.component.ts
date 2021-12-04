import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'banx-registration-form-sms-page',
  templateUrl: './registration-form-sms-page.component.html',
  styleUrls: ['./registration-form-sms-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormSmsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
