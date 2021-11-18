import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegistrationFormPersonalPageComponent } from './registration-form-personal-page.component';
import { RegistrationFormPersonalRoutingModule } from './registration-form-personal-routing.module';

@NgModule({
  imports: [CommonModule, RegistrationFormPersonalRoutingModule],
  declarations: [RegistrationFormPersonalPageComponent],
})
export class RegistrationFormPersonalPageModule {}
