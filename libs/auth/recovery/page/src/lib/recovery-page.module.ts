import { NgModule } from '@angular/core';

import { AuthCardModule } from '@banx/auth/shared';
import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { RecoveryFormModule } from './components/recovery-form/recovery-form.module';
import { RecoveryPageComponent } from './recovery-page.component';
import { RecoveryPageRoutingModule } from './recovery-page-routing.module';

@NgModule({
  imports: [AuthCardModule, RecoveryPageRoutingModule, RecoveryFormModule, NavigationSharedModule],
  declarations: [RecoveryPageComponent],
})
export class RecoveryPageModule {}
