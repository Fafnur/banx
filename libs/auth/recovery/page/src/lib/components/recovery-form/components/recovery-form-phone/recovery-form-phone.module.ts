import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IMaskModule } from 'angular-imask';

import { FormsSharedModule } from '@banx/core/forms/shared';

import { RecoveryFormPhoneComponent } from './recovery-form-phone.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, FormsSharedModule, IMaskModule],
  declarations: [RecoveryFormPhoneComponent],
  exports: [RecoveryFormPhoneComponent],
})
export class RecoveryFormPhoneModule {}
