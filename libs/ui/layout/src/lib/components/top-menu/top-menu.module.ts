import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { ContainerModule } from '@banx/ui/container';
import { NavModule } from '@banx/ui/nav';

import { TopMenuComponent } from './top-menu.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, NavigationSharedModule, ContainerModule, NavModule],
  declarations: [TopMenuComponent],
  exports: [TopMenuComponent],
})
export class TopMenuModule {}
