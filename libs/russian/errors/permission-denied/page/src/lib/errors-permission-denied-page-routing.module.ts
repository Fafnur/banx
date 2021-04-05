import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PermissionDeniedPageComponent } from './components/permission-denied-page/permission-denied-page.component';

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
export class ErrorsPermissionDeniedPageRoutingModule {}
