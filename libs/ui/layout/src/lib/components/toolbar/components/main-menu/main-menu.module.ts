import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { NavModule } from '@banx/ui/nav';

import { MainMenuComponent } from './main-menu.component';
import { MainMenuLinkActivePipe } from './main-menu-link-active.pipe';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationSharedModule, NavModule],
  declarations: [MainMenuComponent, MainMenuLinkActivePipe],
  exports: [MainMenuComponent],
})
export class MainMenuModule {}
