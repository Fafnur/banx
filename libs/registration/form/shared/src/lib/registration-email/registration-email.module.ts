import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegistrationEmailComponent } from './registration-email.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RegistrationEmailComponent],
  exports: [RegistrationEmailComponent],
})
export class RegistrationEmailModule {}
