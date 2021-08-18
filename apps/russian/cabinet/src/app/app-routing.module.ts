import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterBottomComponent, FooterMenuComponent, FooterTopComponent, LayoutComponent, ToolbarComponent } from '@banx/ui/layout';

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
        component: FooterTopComponent,
        outlet: 'footer-top',
      },
      {
        path: '',
        component: FooterMenuComponent,
        outlet: 'footer-menu',
      },
      {
        path: '',
        component: FooterBottomComponent,
        outlet: 'footer-bottom',
      },
      {
        path: '',
        loadChildren: (): Promise<any> => import('@banx/russian/content/pages').then((modules) => modules.ContentPagesModule),
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
