import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServerErrorPageComponent } from './components/server-error-page/server-error-page.component';

const routes: Routes = [
  {
    path: '',
    component: ServerErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorsServerErrorPageRoutingModule {}
