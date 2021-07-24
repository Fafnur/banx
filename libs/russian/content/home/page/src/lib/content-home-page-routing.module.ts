import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentHomePageComponent } from './content-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContentHomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentHomePageRoutingModule {}
