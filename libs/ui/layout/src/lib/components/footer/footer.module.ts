import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ContainerModule } from '@banx/ui/container';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [MatButtonModule, ContainerModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
