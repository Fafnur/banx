import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { MainMenuComponent } from './main-menu.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, NavigationSharedModule],
  declarations: [MainMenuComponent],
  exports: [MainMenuComponent],
})
export class MainMenuModule {}
