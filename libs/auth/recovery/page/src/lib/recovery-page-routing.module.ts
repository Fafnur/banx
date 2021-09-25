import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@banx/core/navigation/common';

import { RecoveryPageComponent } from './recovery-page.component';

const routes: Routes = [
  {
    path: '',
    component: RecoveryPageComponent,
    data: {
      sitemap: {
        loc: NAVIGATION_PATHS.authRecovery,
      },
      meta: {
        title: $localize`:Recovery page meta|:Recovery - Banx`,
        description: $localize`:Recovery page meta|:Password Recovery - Banx`,
        keywords: $localize`:Recovery page meta|:recovery, reset password, forgot password, banx`,
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoveryPageRoutingModule {}
