import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { FormsSharedModule } from '@banx/core/forms/shared';
import {
  RegistrationBirthdateModule,
  RegistrationDriverLicenseModule,
  RegistrationFirstNameModule,
  RegistrationLastNameModule,
  RegistrationMiddleNameModule,
} from '@banx/registration/form/shared';

import { RegistrationFormPersonalPageComponent } from './registration-form-personal-page.component';
import { RegistrationFormPersonalRoutingModule } from './registration-form-personal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationFormPersonalRoutingModule,
    ReactiveFormsModule,
    FormsSharedModule,
    RegistrationLastNameModule,
    RegistrationFirstNameModule,
    RegistrationMiddleNameModule,
    RegistrationBirthdateModule,
    MatButtonModule,
    RegistrationDriverLicenseModule,
  ],
  declarations: [RegistrationFormPersonalPageComponent],
})
export class RegistrationFormPersonalPageModule {}
