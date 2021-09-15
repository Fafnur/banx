import { NgModule } from '@angular/core';

import { AuthGuard } from './auth.guard';

@NgModule({
  providers: [AuthGuard],
})
export class AuthGuardsModule {}
