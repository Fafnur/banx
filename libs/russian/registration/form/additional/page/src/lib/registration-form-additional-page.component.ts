import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'banx-registration-form-additional-page',
  templateUrl: './registration-form-additional-page.component.html',
  styleUrls: ['./registration-form-additional-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormAdditionalPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
