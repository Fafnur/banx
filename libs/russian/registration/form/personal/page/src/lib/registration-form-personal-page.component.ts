import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RegistrationFormField } from '@banx/registration/form/common';
import { RussianRegistrationFormField } from '@banx/russian/registration/form/common';

import { createForm } from './registration-form-personal-page.form';

@Component({
  selector: 'banx-registration-form-personal-page',
  templateUrl: './registration-form-personal-page.component.html',
  styleUrls: ['./registration-form-personal-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormPersonalPageComponent implements OnInit {
  readonly fields = RegistrationFormField;
  readonly russianFields = RussianRegistrationFormField;

  form!: FormGroup;

  ngOnInit(): void {
    this.form = createForm();
  }
}
