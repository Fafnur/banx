import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormCardModule } from '@banx/registration/form/ui/card';
import { GridModule } from '@banx/ui/grid';

import { RegistrationFormAdditionalPageComponent } from './registration-form-additional-page.component';
import { RegistrationFormAdditionalPageRoutingModule } from './registration-form-additional-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationFormAdditionalPageRoutingModule,
    ReactiveFormsModule,
    FormsSharedModule,
    RegistrationFormCardModule,
    GridModule,
  ],
  declarations: [RegistrationFormAdditionalPageComponent],
})
export class RegistrationFormAdditionalPageModule {}
