import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@banx/core/navigation/common';
import { UserGuardsModule, UserLoggedGuard } from '@banx/users/guards';
import { UserLayoutComponent, UserLayoutModule } from '@banx/users/ui/layout';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    canActivate: [UserLoggedGuard],
    children: [
      {
        path: NAVIGATION_PATHS.user,
        redirectTo: NAVIGATION_PATHS.userProfile,
        pathMatch: 'full',
      },
      {
        path: NAVIGATION_PATHS.userApproved,
        canActivate: [],
        loadChildren: () => import('@banx/users/approve/page').then((modules) => modules.UserApprovePageModule),
      },
      {
        path: NAVIGATION_PATHS.userRejected,
        canActivate: [],
        loadChildren: () => import('@banx/users/reject/page').then((modules) => modules.UserRejectPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), UserGuardsModule, UserLayoutModule],
  exports: [RouterModule],
})
export class UserPagesRoutingModule {}
