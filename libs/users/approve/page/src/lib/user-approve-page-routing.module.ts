import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserApprovePageComponent } from './user-approve-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserApprovePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserApprovePageRoutingModule {}
