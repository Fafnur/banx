import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { RegistrationFormFacade } from '@banx/registration/form/state';

@Component({
  selector: 'banx-registration-form-layout',
  templateUrl: './registration-form-layout.component.html',
  styleUrls: ['./registration-form-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormLayoutComponent implements OnInit {
  constructor(private readonly registrationFormFacade: RegistrationFormFacade) {}

  ngOnInit(): void {
    this.registrationFormFacade.load();
  }
}
