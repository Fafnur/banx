import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormCardModule } from '@banx/registration/form/ui/card';
import { RegistrationSmsCodeModule } from '@banx/registration/form/ui/fields';
import { GridModule } from '@banx/ui/grid';

import { RegistrationFormSmsPageComponent } from './registration-form-sms-page.component';
import { RegistrationFormSmsPageRoutingModule } from './registration-form-sms-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationFormSmsPageRoutingModule,
    ReactiveFormsModule,
    FormsSharedModule,
    RegistrationFormCardModule,
    RegistrationSmsCodeModule,
    GridModule,
  ],
  declarations: [RegistrationFormSmsPageComponent],
})
export class RegistrationFormSmsPageModule {}
