import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationFormCardModule } from '@banx/registration/form/ui/card';
import { GridModule } from '@banx/ui/grid';

import { RegistrationFormFamilyPageComponent } from './registration-form-family-page.component';
import { RegistrationFormFamilyRoutingModule } from './registration-form-family-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationFormFamilyRoutingModule,
    ReactiveFormsModule,
    FormsSharedModule,
    RegistrationFormCardModule,
    GridModule,
  ],
  declarations: [RegistrationFormFamilyPageComponent],
})
export class RegistrationFormFamilyPageModule {}
