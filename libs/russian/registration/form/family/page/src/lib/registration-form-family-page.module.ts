import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsSharedModule } from '@banx/core/forms/shared';
import { RegistrationCityModule } from '@banx/registration/form/shared';
import { RegistrationFormCardModule } from '@banx/registration/form/ui/card';
import { GridModule } from '@banx/ui/grid';

import { RegistrationFormFamilyPageComponent } from './registration-form-family-page.component';
import { RegistrationFormFamilyPageRoutingModule } from './registration-form-family-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationFormFamilyPageRoutingModule,
    ReactiveFormsModule,
    FormsSharedModule,
    RegistrationFormCardModule,
    GridModule,
    RegistrationCityModule,
  ],
  declarations: [RegistrationFormFamilyPageComponent],
})
export class RegistrationFormFamilyPageModule {}
