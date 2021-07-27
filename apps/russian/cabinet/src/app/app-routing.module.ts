import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CopyrightComponent, LayoutComponent, ToolbarComponent } from '@banx/ui/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ToolbarComponent,
        outlet: 'header',
      },
      {
        path: '',
        component: CopyrightComponent,
        outlet: 'footer',
      },
      {
        path: '',
        loadChildren: (): Promise<any> => import('./content/content.module').then((modules) => modules.ContentModule),
      },
    ],
  },
  {
    path: '',
    loadChildren: (): Promise<any> => import('@banx/errors/pages').then((modules) => modules.ErrorsPagesModule),
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
