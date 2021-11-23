import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFirstNameModule, RegistrationLastNameModule, RegistrationMiddleNameModule } from '@banx/registration/form/shared';

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
  ],
  declarations: [RegistrationFormPersonalPageComponent],
})
export class RegistrationFormPersonalPageModule {}
