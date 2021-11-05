import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegistrationDependentsAmountComponent } from './registration-dependents-amount.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RegistrationDependentsAmountComponent],
  exports: [RegistrationDependentsAmountComponent],
})
export class RegistrationDependentsAmountModule {}
