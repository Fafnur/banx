import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthCardComponent } from './auth-card.component';
import { AuthCardTitleModule } from './components/auth-card-title/auth-card-title.module';

@NgModule({
  imports: [CommonModule, AuthCardTitleModule, RouterModule],
  declarations: [AuthCardComponent],
  exports: [AuthCardComponent],
})
export class AuthCardModule {}
