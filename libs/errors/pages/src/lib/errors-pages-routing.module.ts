import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@banx/core/navigation/common';

const routes: Routes = [
  {
    path: NAVIGATION_PATHS.permissionDenied,
    loadChildren: (): Promise<any> => import('@banx/errors/permission-denied/page').then((modules) => modules.PermissionDeniedPageModule),
  },
  {
    path: NAVIGATION_PATHS.serverError,
    loadChildren: (): Promise<any> => import('@banx/errors/server-error/page').then((modules) => modules.ServerErrorPagePageModule),
  },
  {
    path: '**',
    loadChildren: (): Promise<any> => import('@banx/errors/not-found/page').then((modules) => modules.NotFoundPagePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorsPagesRoutingModule {}
