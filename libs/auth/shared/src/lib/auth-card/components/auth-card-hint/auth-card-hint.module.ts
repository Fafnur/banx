import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthCardHintComponent } from './auth-card-hint.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthCardHintComponent],
  exports: [AuthCardHintComponent],
})
export class AuthCardHintModule {}
