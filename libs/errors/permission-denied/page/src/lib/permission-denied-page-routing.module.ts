import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PermissionDeniedPageComponent } from './permission-denied-page.component';

const routes: Routes = [
  {
    path: '',
    component: PermissionDeniedPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermissionDeniedPageRoutingModule {}
