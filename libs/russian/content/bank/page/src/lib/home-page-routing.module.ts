import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@banx/core/navigation/common';
import { TopMenuComponent } from '@banx/ui/layout';

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
  {
    path: '',
    component: TopMenuComponent,
    outlet: 'header-top',
    data: {
      parent: NAVIGATION_PATHS.bank,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
