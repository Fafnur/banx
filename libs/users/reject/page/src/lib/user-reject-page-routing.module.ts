import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRejectPageComponent } from './user-reject-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserRejectPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRejectPageRoutingModule {}
