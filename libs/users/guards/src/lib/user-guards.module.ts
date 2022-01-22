import { NgModule } from '@angular/core';

import { UserLoggedGuard } from './user-logged.guard';

@NgModule({
  providers: [UserLoggedGuard],
})
export class UserGuardsModule {}
