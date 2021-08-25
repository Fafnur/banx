import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '@banx/ui/container';

import { TopMenuComponent } from './top-menu.component';

@NgModule({
  imports: [CommonModule, ContainerModule],
  declarations: [TopMenuComponent],
  exports: [TopMenuComponent],
})
export class TopMenuModule {}
