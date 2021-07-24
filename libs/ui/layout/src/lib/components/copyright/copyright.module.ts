import { NgModule } from '@angular/core';

import { ContainerModule } from '@banx/ui/container';

import { CopyrightComponent } from './copyright.component';

@NgModule({
  imports: [ContainerModule],
  declarations: [CopyrightComponent],
  exports: [CopyrightComponent],
})
export class CopyrightModule {}
