import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';

@Component({
  selector: 'banx-registration-form-family-page',
  templateUrl: './registration-form-family-page.component.html',
  styleUrls: ['./registration-form-family-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormFamilyPageComponent implements OnInit {
  readonly fields = RegistrationFormField;
  readonly step = RegistrationFormSubSteps.Family;

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({});
  }
}
