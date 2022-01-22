import { NgModule } from '@angular/core';

import { RegistrationProcessGuard } from './registration-process.guard';
import { RegistrationProcessLoadGuard } from './registration-process-load.guard';

@NgModule({
  providers: [RegistrationProcessGuard, RegistrationProcessLoadGuard],
})
export class RegistrationProcessGuardsModule {}
