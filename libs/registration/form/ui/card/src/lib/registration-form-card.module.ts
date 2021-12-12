import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { ButtonsModule } from '@banx/ui/buttons';

import { RegistrationFormCardComponent } from './registration-form-card.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MatButtonModule, ButtonsModule],
  declarations: [RegistrationFormCardComponent],
  exports: [RegistrationFormCardComponent],
})
export class RegistrationFormCardModule {}
