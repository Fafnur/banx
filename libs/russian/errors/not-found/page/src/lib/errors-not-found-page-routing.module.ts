import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorsNotFoundPageComponent } from './errors-not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorsNotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorsNotFoundPageRoutingModule {}
