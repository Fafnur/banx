import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'banx-registration-form-personal-page',
  templateUrl: './registration-form-personal-page.component.html',
  styleUrls: ['./registration-form-personal-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormPersonalPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
