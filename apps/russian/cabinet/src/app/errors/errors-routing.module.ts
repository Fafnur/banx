import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'permission-denied',
    loadChildren: (): Promise<any> => import('@banx/errors/permission-denied/page').then((modules) => modules.PermissionDeniedPageModule),
  },
  {
    path: 'server-error',
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
export class ErrorsRoutingModule {}
