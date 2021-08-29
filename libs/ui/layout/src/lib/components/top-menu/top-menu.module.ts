import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@banx/ui/container';
import { NavModule } from '@banx/ui/nav';

import { TopMenuComponent } from './top-menu.component';

@NgModule({
  imports: [RouterModule, ContainerModule, NavModule],
  declarations: [TopMenuComponent],
  exports: [TopMenuComponent],
})
export class TopMenuModule {}
