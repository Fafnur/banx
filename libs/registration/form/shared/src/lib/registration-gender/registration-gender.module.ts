import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegistrationGenderComponent } from './registration-gender.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RegistrationGenderComponent],
  exports: [RegistrationGenderComponent],
})
export class RegistrationGenderModule {}
