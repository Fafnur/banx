import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@banx/ui/container';

import { AuthModule } from './components/auth/auth.module';
import { BrandModule } from './components/brand/brand.module';
import { MainMenuModule } from './components/main-menu/main-menu.module';
import { SideMenuModule } from './components/side-menu/side-menu.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    ContainerModule,
    BrandModule,
    MainMenuModule,
    SideMenuModule,
    AuthModule,
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
