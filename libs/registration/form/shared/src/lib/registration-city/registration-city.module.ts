import { CommonModule } from '@angular/common';
import { Input, NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormField } from '@banx/registration/form/common';
import { TrackersSharedModule } from '@banx/trackers/shared';

import { RegistrationCityComponent } from './registration-city.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, FormsSharedModule, TrackersSharedModule],
  declarations: [RegistrationCityComponent],
  exports: [RegistrationCityComponent],
})
export class RegistrationCityModule {
  @Input() control!: FormControl;

  readonly type = RegistrationFormField.AdditionalContactName;
  readonly id = REGISTRATION_FORM_FIELD_IDS[this.type];
}
