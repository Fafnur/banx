import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthCardLinksComponent } from './auth-card-links.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [AuthCardLinksComponent],
  exports: [AuthCardLinksComponent],
})
export class AuthCardLinksModule {}
