import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthCardTitleComponent } from './auth-card-title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthCardTitleComponent],
  exports: [AuthCardTitleComponent],
})
export class AuthCardTitleModule {}
