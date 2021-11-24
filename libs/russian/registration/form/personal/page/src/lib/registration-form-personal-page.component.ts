import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormFacade } from '@banx/registration/form/state';

import { createForm } from './registration-form-personal-page.form';

@Component({
  selector: 'banx-registration-form-personal-page',
  templateUrl: './registration-form-personal-page.component.html',
  styleUrls: ['./registration-form-personal-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormPersonalPageComponent implements OnInit {
  readonly fields = RegistrationFormField;

  form!: FormGroup;

  constructor(private readonly registrationFormFacade: RegistrationFormFacade) {}

  ngOnInit(): void {
    this.form = createForm();
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    console.log(this.form.value);

    if (this.form.valid) {
      console.log('submit');
    }
  }
}
