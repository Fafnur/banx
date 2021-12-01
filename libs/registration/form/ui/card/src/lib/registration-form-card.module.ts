import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegistrationFormCardComponent } from './registration-form-card.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [RegistrationFormCardComponent],
  exports: [RegistrationFormCardComponent],
})
export class RegistrationFormCardModule {}
