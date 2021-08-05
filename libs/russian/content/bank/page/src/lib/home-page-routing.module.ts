import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeInfoComponent } from './components/home-info/home-info.component';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: '',
    outlet: 'footer-info',
    component: HomeInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
