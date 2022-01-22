import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormCardModule } from '@banx/registration/form/ui/card';
import {
  RegistrationAgreementModule,
  RegistrationBirthdateModule,
  RegistrationEmailModule,
  RegistrationFirstNameModule,
  RegistrationGenderModule,
  RegistrationLastNameModule,
  RegistrationMiddleNameModule,
  RegistrationMobilePhoneModule,
} from '@banx/registration/form/ui/fields';
import { GridModule } from '@banx/ui/grid';

import { RegistrationFormPersonalPageComponent } from './registration-form-personal-page.component';
import { RegistrationFormPersonalPageRoutingModule } from './registration-form-personal-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationFormPersonalPageRoutingModule,
    ReactiveFormsModule,
    FormsSharedModule,
    RegistrationLastNameModule,
    RegistrationFirstNameModule,
    RegistrationMiddleNameModule,
    RegistrationBirthdateModule,
    RegistrationGenderModule,
    RegistrationFormCardModule,
    RegistrationAgreementModule,
    RegistrationMobilePhoneModule,
    RegistrationEmailModule,
    GridModule,
  ],
  declarations: [RegistrationFormPersonalPageComponent],
})
export class RegistrationFormPersonalPageModule {}
