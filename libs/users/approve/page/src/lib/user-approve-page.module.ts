import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserApprovePageComponent } from './user-approve-page.component';
import { UserApprovePageRoutingModule } from './user-approve-page-routing.module';

@NgModule({
  imports: [CommonModule, UserApprovePageRoutingModule],
  declarations: [UserApprovePageComponent],
})
export class UserApprovePageModule {}
