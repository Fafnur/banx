import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiLayoutComponent } from '@banx/russian/ui/layout';

const routes: Routes = [
  {
    path: '',
    component: UiLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: (): Promise<any> => import('./content/content.module').then((modules) => modules.ContentModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
