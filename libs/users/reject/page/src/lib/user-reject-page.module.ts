import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserRejectPageComponent } from './user-reject-page.component';
import { UserRejectPageRoutingModule } from './user-reject-page-routing.module';

@NgModule({
  imports: [CommonModule, UserRejectPageRoutingModule],
  declarations: [UserRejectPageComponent],
})
export class UserRejectPageModule {}
